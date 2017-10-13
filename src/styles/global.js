import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { fontSmoothing } from '.';

export default function injectGlobalStyles() {
	return injectGlobal`
		${normalize()}

		*,
		*:before,
		*:after {
			box-sizing: border-box;
		}

		html {
			height: 100%;
			touch-action: manipulation;
		}

		body {
			height: 100%;
			font-family: "Helvetica Neue", "Helvetica", "OpenSans", "Arial", sans-serif;
			${fontSmoothing.antialiased}
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}

		#root { height: 100%; }

		h1, h2, h3, h4, h5, h6 {
			margin: 0;
			font-weight: normal;
			letter-spacing: 0.02em;
		}

		a {
			color: inherit;
			text-decoration: none;
		}

		input,
		select,
		button,
		textarea {
			outline: none;

			font-family: inherit;
			-webkit-font-smoothing: inherit;
		}

		hr {
			width: 100%;
			height: 1px;
			margin: 15px 0;
			background: gray;
			border: 0;

			&.-dark { opacity: 0.2; }
		}

		ul, ol {
			margin: 0;
			list-style: none;
		}

		[contenteditable] {
			border-bottom: 1px dashed rgba(gray, 0.5);

			&:focus {
				color: gray;
				border-bottom: 1px solid gray;
				outline: none;

				&::selection {
					color: white;
					background: gray;
				}
			}
		}

		svg:not(:root) {
			overflow: visible;
		}
	`;
}
