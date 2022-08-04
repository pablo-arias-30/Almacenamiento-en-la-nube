//const { tareas } = require("../../model/model");

class FilesAppPresenter {
    constructor(proxy, view) {
        this.proxy = proxy;
        this.view = view;
        this.refresh();
    }
    /*
        init() {
            setTimeout(() => {
                this.model.agregarTarea('Titulo 1', 'Descripción 1');
                setTimeout(() => {
                    this.model.agregarTarea('Titulo 2', 'Descripción 2');
                    setTimeout(() => {
                        this.model.agregarTarea('Titulo 3', 'Descripción 3');
                        setTimeout(() => {
                            this.model.agregarTarea('Titulo 4', 'Descripción 4');
                            this.refresh();
                        }, 1);
                    }, 1);
                }, 1);
            }, 1);
    
        }*/


    async refresh() {
       /* let t = await this.proxy.files();
        console.log(t); //imprime una promesa
        if (t.ok) {
            let tareas = await t.json();
            tareas.forEach(tarea => {
                console.log(tareas);

                let nav = document.createElement('nav');
                let a = document.createElement('a');
                a.innerHTML = tarea._titulo;
                a.href = `ver-tarea.html?id=${tarea._id}`
                nav.appendChild(a);


                let tbody = document.getElementById('tabla');
                tbody.appendChild(nav);

                let a2 = document.createElement('a');
                a2.innerHTML = 'X';
                //    a2.href = "borrar-tarea.html?id=1"; //?id=parametro que le pedimos
                a2.href = `borrar-tarea.html?id=${tarea._id}` //genera un id por cada uno
                nav.appendChild(a2);
            });
        } else this.status = `ERROR: No se encuentran tareas`;

*/
    }
}
