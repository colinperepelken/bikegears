export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const detectTheme = () => {
    let theme = THEME_LIGHT;

    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === THEME_DARK) {
            theme = THEME_DARK;
        }
    } else if (!window.matchMedia) {
        return theme; // matchMedia method not supported
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = THEME_DARK;
    }

    return theme;
}

export const setTheme = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

export const getTheme = () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (!theme) {
        return THEME_LIGHT;
    }

    return theme;
}

export default {
    data() {
        return {
            darkMode: false
        }
    },
    methods: {
        detectTheme,
        setTheme,
        getTheme
    },
    watch: {
        darkMode() {
            if (this.darkMode) {
                this.setTheme(THEME_DARK);
            } else {
                this.setTheme(THEME_LIGHT);
            }
        }
    },
    mounted() {
        this.darkMode = this.detectTheme;
    }
};
