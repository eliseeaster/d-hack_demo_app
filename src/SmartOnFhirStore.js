import { dipsExtensions } from "dipssmartonfhirextensions";
import { writable, derived } from "svelte/store";
import {oauth2 as Smart} from 'fhirclient';

export const fhir = writable(null);

export const dipsExtensionsStore = writable(dipsExtensions);

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

export const patient = derived(
    fhir,
    ($fhir, set) => {
        console.log("aaaaaaa")
        if($fhir != null && $fhir.client != null)
        {
            console.log("bbbbbbbbbb")
            $fhir.client.patient.read().then(p => set(p));
        }
    }
);

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



