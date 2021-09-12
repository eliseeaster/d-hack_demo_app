<script>
    import {dipsExtensions} from 'dipssmartonfhirextensions';
    import {fhir, patient, patientName, dipsExtensionsStore} from './SmartOnFhirStore.js';
</script>

<main>

    <h1>Welcome to Smart on FHIR demo-app</h1>
    <div>
        <p>Pasientnavn: {$patientName}</p>
        <p>PasientId: {$patient?.id}</p>
    </div>
</main>


