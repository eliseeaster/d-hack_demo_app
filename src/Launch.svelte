<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {
        Smart.authorize({
            clientId: 'd-hack_client',
            scope: 'launch openid fhirUser patient/*.read patient/*.write offline_access',
            redirectUri: './app',
            //iss: 'https://vt-selecta-b.dips.local/DIPS-WebAPI/HL7/FHIR-R4',
			iss: 'https://kernel.dips.fhir.service.api.dips.no',
            //launch:	'cdp2010025:encounter:resource'
            launch: '6c5d9ca9-54d7-42f5-bfae-a7c19cd217f2',
        });
    })
</script>
