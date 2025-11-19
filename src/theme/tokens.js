export const getDesignTokens = (mode) => ({
palette: {
mode,
...(mode === 'dark' ? {
primary: { main: '#7c3aed' },
background: { default: '#071025', paper: '#071827' },
text: { primary: '#e6eef8', secondary: '#94a3b8' }
} : {
primary: { main: '#4f46e5' },
background: { default: '#f7fafc', paper: '#ffffff' },
text: { primary: '#0f1720', secondary: '#475569' }
})
},
typography: { fontFamily: ['Inter','Roboto','Arial'].join(',') }
})