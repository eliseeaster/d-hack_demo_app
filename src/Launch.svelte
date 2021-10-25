<script>
    import {oauth2 as Smart} from 'fhirclient';
	import {onMount} from 'svelte';

    onMount(async () => {
        Smart.authorize({
            clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			scope: process.env.SCOPE,
            redirectUri: './app',
            iss: process.env.ISS,
            launch:	'cdp2010025:encounter:resource'
        });
    })
</script>
