import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory } from 'vue-router';
import './style.css';
import InteractiveMediaPage from './pages/InteractiveMediaPage.vue';
import DevelopmentPage from './pages/DevelopmentPage.vue';
import DesignPage from './pages/DesignPage.vue';
import ResearchPage from './pages/ResearchPage.vue';
import CommunicationPage from './pages/CommunicationPage.vue';
import ProfessionalIdentityPage from './pages/ProfessionalIdentityPage.vue';
import HomePage from './pages/HomePage.vue';

const app = createApp(App);

const router = createRouter({ 
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: HomePage, 
            name: 'home' 
        },
        { 
            path: '/interactive-media', 
            component: InteractiveMediaPage,
            name: 'interactive-media' 
        },
        { 
            path: '/development', 
            component: DevelopmentPage,
            name: 'development' 
        },
        { 
            path: '/design', 
            component: DesignPage,
            name:  'design'
        },
        { 
            path: '/research', 
            component: ResearchPage,
            name:  'research'
        },
        { 
            path: '/communication', 
            component: CommunicationPage,
            name:  'communication'
        },
        { 
            path: '/professional-identity', 
            component: ProfessionalIdentityPage,
            name:  'professional-identity'
        },
    ]
});

app.use(router);
app.mount('#app');
