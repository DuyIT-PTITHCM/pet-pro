<script>
    import "carbon-components-svelte/css/white.css";

    import {
        Header,
        HeaderUtilities,
        HeaderAction,
        HeaderGlobalAction,
        HeaderPanelLinks,
        HeaderPanelDivider,
        HeaderPanelLink,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
        SideNavLink,
        SkipToContent,
        Content
    } from "carbon-components-svelte";
    import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
    import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
    import HumidityAlt from "carbon-icons-svelte/lib/HumidityAlt.svelte";
    import { Fade, Hearing, Home } from "carbon-icons-svelte";

    let isSideNavOpen = false;
    let isOpen1 = false;
    let isOpen2 = false;
</script>

<Header company="Admin" platformName="Dashboard" bind:isSideNavOpen persistentHamburgerMenu={true} >
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    <HeaderUtilities >
        <HeaderGlobalAction aria-label="Settings" icon={SettingsAdjust} />
        <HeaderAction
            bind:isOpen={isOpen1}
            icon={UserAvatarFilledAlt}
            closeIcon={UserAvatarFilledAlt}
        >
            <HeaderPanelLinks>
                <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
                <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
                <HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
            </HeaderPanelLinks>
        </HeaderAction>
        <HeaderAction bind:isOpen={isOpen2}>
            <HeaderPanelLinks>
                <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
                <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
                <HeaderPanelLink>Switcher item 5</HeaderPanelLink>
            </HeaderPanelLinks>
        </HeaderAction>
    </HeaderUtilities>
</Header>

<div class="side_nav">
    <SideNav
        style="background: whitesmoke;"
        bind:isOpen={isSideNavOpen}
        fixed
        expansionBreakpoint={1584}
        class="custom-side-nav"
    >
        <SideNavItems>
            <SideNavLink icon={Fade} text="Link 1" />
            <SideNavLink icon={Home} text="Link 2" />
            <SideNavLink icon={HumidityAlt} text="Link 3" />
            <SideNavMenu  icon={Hearing} text="Menu">
                <SideNavMenuItem href="/" text="Link 1" />
                <SideNavMenuItem href="/" text="Link 2" />
                <SideNavMenuItem href="/" text="Link 3" />
            </SideNavMenu>
        </SideNavItems>
    </SideNav>
</div>

<Content>
    <div class="conntainer-admin">
        <slot />
    </div>
    
</Content>
<style>
    .conntainer-admin{
        margin: 0 20px;
    }
</style>
