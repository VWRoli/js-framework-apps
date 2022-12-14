<script>
	import Button from './Button.svelte';
</script>

<form action="/" class="form">
	<div class="form-control">
		<div class="input-base">
			<input type="text" id="todo" name="todo" placeholder="Task" />
			<fieldset>
				<legend><span class="notranslate">&ZeroWidthSpace;</span></legend>
			</fieldset>
		</div>
	</div>
	<div class="form-group">
		<label for="completed"
			><span class="completed-label">Completed</span><span
				><input type="checkbox" id="completed" name="completed" value="completed" /></span
			></label
		>
	</div>
	<Button label="Save task" className="primary" clickHandler={() => {}} fullWidth={true} />
</form>

<style>
	.form {
		padding-bottom: 16px;
	}
	.form-control {
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		position: relative;
		min-width: 0;
		padding: 0;
		margin: 0;
		border: 0;
		vertical-align: top;
		width: 100%;
		margin-top: 16px;
		margin-bottom: 16px;
	}
	.form-control label {
		color: rgba(0, 0, 0, 0.6);
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.4375em;
		letter-spacing: 0.00938em;
		padding: 0;
		position: relative;
		display: block;
		transform-origin: top left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: calc(100% - 24px);
		position: absolute;
		left: 0;
		top: 0;
		-webkit-transform: translate(14px, 16px) scale(1);
		-moz-transform: translate(14px, 16px) scale(1);
		-ms-transform: translate(14px, 16px) scale(1);
		transform: translate(14px, 16px) scale(1);
		-webkit-transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
			-webkit-transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
			max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
			transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		z-index: 1;
		pointer-events: none;
	}
	.input-base {
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.4375em;
		letter-spacing: 0.00938em;
		color: rgba(0, 0, 0, 0.87);
		box-sizing: border-box;
		position: relative;
		cursor: text;
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		position: relative;
		border-radius: 4px;
	}
	.input-base input {
		font: inherit;
		letter-spacing: inherit;
		color: currentColor;
		padding: 4px 0 5px;
		border: 0;
		box-sizing: content-box;
		background: none;
		height: 1.4375em;
		margin: 0;
		-webkit-tap-highlight-color: transparent;
		display: block;
		min-width: 0;
		width: 100%;
		-webkit-animation-name: mui-auto-fill-cancel;
		animation-name: mui-auto-fill-cancel;
		-webkit-animation-duration: 10ms;
		animation-duration: 10ms;
		padding: 16.5px 14px;
	}
	.input-base fieldset {
		text-align: left;
		position: absolute;
		bottom: 0;
		right: 0;
		top: -5px;
		left: 0;
		margin: 0;
		padding: 0 8px;
		pointer-events: none;
		border-radius: inherit;
		border-style: solid;
		border-width: 1px;
		overflow: hidden;
		min-width: 0%;
		border-color: rgba(0, 0, 0, 0.23);
	}
	.input-base legend {
		float: unset;
		width: auto;
		overflow: hidden;
		padding: 0;
		line-height: 11px;
		-webkit-transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	}
	.input-base legend span {
		float: unset;
		width: auto;
		overflow: hidden;
		padding: 0;
		line-height: 11px;
		-webkit-transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	}
	.form-group {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		padding: 16px 0 16px 0;
	}
</style>
