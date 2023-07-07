import { LightningElement } from 'lwc';

export default class Login extends LightningElement {
    handleLogin() {
        const emailInput = this.template.querySelector('input[name="email"]');
        const passwordInput = this.template.querySelector('input[name="password"]');

        if (!emailInput.value || !passwordInput.value) {
            alert('Por favor, preencha todos os campos de login e senha.');
        }
    }
}