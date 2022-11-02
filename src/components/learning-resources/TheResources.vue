<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        'stored-resources': StoredResources,
        'add-resource': AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The Official Vue.js Documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com'
                }
            ]
        }
    },
    provide() {
        resources: this.storedResources
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>