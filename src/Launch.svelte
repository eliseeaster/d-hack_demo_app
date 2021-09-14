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
        });
    })
</script>
