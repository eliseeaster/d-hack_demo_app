<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {
        Smart.authorize({
            clientId: 'd-hack_client',
            scope: 'launch openid fhirUser patient/*.read patient/*.write offline_access',
            redirectUri: './app',
            iss: 'https://vt-selecta-b.dips.local/DIPS-WebAPI/HL7/FHIR-R4',
            launch:	'cdp2010025:encounter:resource'
	    // iss=https://banan.dips.fhir.service.api.dips.no
	    // launch=62247e85-c8c1-4047-90b3-e0b3a9c59600
        });
    })
</script>
