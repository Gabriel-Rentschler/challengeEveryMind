import { LightningElement } from 'lwc';
import EYassets from '@salesforce/resourceUrl/EYassets';

export default class Filtro extends LightningElement {
    candidato1 = `${EYassets}/EYassets/matheusLogo.png`;
    candidato2 = `${EYassets}/EYassets/Cahue.jpg`;
    candidato3 = `${EYassets}/EYassets/Gabriel.jpg`;
    candidato4 = `${EYassets}/EYassets/Gustavo.jpg`;
    searchText = '';

    handleSearchKeyUp(event) {
        this.searchText = event.target.value.toLowerCase();
    }

    handleSearchEnter(event) {
        if (event.key === 'Enter') {
            this.sendQuestion();
        }
    }

    sendQuestion() {
        var searchInput = this.template.querySelector('input[name="search"]').value;
        console.log(searchInput);
        const OPENAI_API_KEY = "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";

        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                max_tokens: 100, // tamanho da resposta
                temperature: 0.5,
                messages: [{"role": "user", "content": searchInput}] // criatividade na resposta
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.error?.message) {
                console.log(`Error: ${json.error.message}`);
            } else if (json.choices?.[0].message) {
                var text = json.choices[0].message.content || "Sem resposta";

                console.log(text);
            }
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
            console.log('finally')
        });

    }
}
