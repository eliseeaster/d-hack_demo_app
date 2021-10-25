import { dipsExtensions } from "dipssmartonfhirextensions";
import { writable, derived } from "svelte/store";
import {oauth2 as Smart} from 'fhirclient';

export const fhir = writable(null);

export const dipsExtensionsStore = writable(dipsExtensions);

//Runs when the app is authorized to access the FHIR-api
Smart.ready()
    .then(client => {
			console.log(client);
        var newContext = {
            client: client,
            error: null
        };
        fhir.set(newContext);
    })
    .catch(console.error);

//Stores patient as a svelte store
export const patient = derived(
    fhir,
    ($fhir, set) => {
        if($fhir != null && $fhir.client != null)
        {
            var patientId = $fhir.client.getState("tokenResponse.patient");
            $fhir.client.request({
					url: "Patient/"+patientId,
					headers:{
						'dips-subscription-key': process.env.DIPS_SUBSCRIPTION_KEY
					}}
			).then(
                resource => {
                    set(resource);
                });                       
				
        }
    }
);

//Stores patientName as a svelte store
export const patientName = derived(
    patient,
    ($patient, set) => {
        if ($patient != null && $patient.name != null) {
            let familyName = $patient.name[0].family;
            let givenName = $patient.name[0].given[0];
            let patientName = givenName + " " + familyName;
            set(patientName);
        }
    }
);




