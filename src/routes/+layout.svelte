<script lang="ts">
	import "../app.css";
</script>

<div class="hidden lg:block">
	<slot />
</div>
<div class="dark bg-[#121212] h-screen w-screen flex items-center justify-center text-center lg:hidden">
	Mobile Not Supported
</div>
