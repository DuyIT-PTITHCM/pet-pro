<script>
    import Icon from '@iconify/svelte';
    export let url = '/'
    export let classList = 'inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    export let content = 'Click'
    export let space = 'ml-2'
    export let icon = ''
    export let styleList = ''
    export let classOrther = ''
    let btnClass = classList + ' ' + classOrther 
</script>

<a href={url} class={btnClass} style={styleList}>
    {content}<span class={space}></span><Icon icon={icon} />
</a>