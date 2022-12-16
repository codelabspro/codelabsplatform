<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">CodeLabsPro</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm btn-ghost-surface" href="home/" rel="noreferrer">Home</a>
				<a class="btn btn-sm btn-ghost-surface" href="about/"rel="noreferrer">About</a>
				<a class="btn btn-sm btn-ghost-surface" href="blog/" rel="noreferrer">Blog</a>
				<a class="btn btn-sm btn-ghost-surface" href="contact/" rel="noreferrer">Contact</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
