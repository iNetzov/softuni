import { html } from "../../node_modules/lit-html/lit-html.js";

export let optionTemplate = (option) => html `<option .value=${option._id}>${option.text}</option>`;

export let optionsTemp = (options) => html `
${options.map(o=>optionTemplate(o))}
`;