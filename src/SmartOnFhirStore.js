import { dipsExtensions } from "dipssmartonfhirextensions";
import { writable, derived } from "svelte/store";
import {oauth2 as Smart} from 'fhirclient';

export const fhir = writable(null);

export const dipsExtensionsStore = writable(dipsExtensions);

//Runs when the app is authorized to access the FHIR-api
Smart.ready()
    .then(client => {
        var newContext = {
            client: client,
            error: null
        };
        console.log(client);
        fhir.set(newContext);
        console.log(newContext.client)
    })
    .catch(console.error);

//Stores patient as a svelte store
export const patient = derived(
    fhir,
    ($fhir, set) => {
        if($fhir != null && $fhir.client != null)
        {
            $fhir.client.patient.read().then(p => set(p));
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




