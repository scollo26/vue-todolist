// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)





const app = new Vue(
    {
        el: '#app',
        data: {
            todoNew:'',
            todos: [
                {
                    text:'Bugatti  ',
                    done: true
                },
                {
                    text:'Ferrari ',
                    done: true
                },
                {
                    text:'Lamborghini  ',
                    done: false
                },
            ]
            
        },
        methods: {
            //  click icona aggiungo elemento
            addTodo: function() {
                // controllo se stringa vuota
                if (this.todoNew != '') {
                    let obj = {
                        text: this.todoNew,
                        done: false
                    };
                    // mette in prima posizione
                    this.todos.unshift(obj);
                    this.todoNew='';  
                }
            },
            // controllo la variabile booleana e la inverte 
            check: function(index) {
                this.todos[index].done = !this.todos[index].done;
            },
            // cancella elemento
            deleteTodo: function(index) {
                this.todos.splice(index, 1);
            },
        }
    }
)