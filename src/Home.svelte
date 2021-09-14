<script>
    import {dipsExtensions} from 'dipssmartonfhirextensions';
    import {patient, patientName} from './SmartOnFhirStore.js';
    
</script>

<main>
    <div>
        <h1 class="sameLine">Welcome to Smart on FHIR demo-app</h1>
        <img src="dips_logo.png" alt="Dips Logo" height="100" align="center"/>
    </div>

    <div class="border">
        <p><b>Patient name: </b>{$patientName}</p>
        <p><b>Gender: </b>{$patient?.gender}</p>
        <p><b>Birth date: </b>{$patient?.birthDate}</p>
        <p><b>Address: </b>{$patient?.address[0]?.line}, {$patient?.address[0]?.city}</p>
    </div>
</main>


<style>
    .sameLine {
        display: inline-block;
    }

    .border {
        border-style: solid;
        border-radius: 10px;
        border-color: lightseagreen;
        display: inline-block;
        padding: 10px;
    }

</style>



