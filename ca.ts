class Bateria{
    constructor(private capacidadBateria:string, private marcaBateria:string){
        this.capacidadBateria = capacidadBateria;
        this.marcaBateria = marcaBateria;
    }
    mostrar(){
        return `${this.capacidadBateria} mAh`;
    }
}
class Chip{
    constructor(private empresa:string, private numero: number){
        this.empresa=empresa;
        this.numero= numero;
    }
    mostrarEmpresa(){
        return ` La empresa es ${this.empresa} `;
    }
    mostrarNumerp(){
        return ` el numero es ${this.numero} `;
    }
}

class Celular{
    private bateria : Bateria ;
    private chips : Chip;
    private nchips:number;
    constructor( private modelo:string,private capacidadBateria:string,private marcaBateria:string){
        this.modelo = modelo;
        this.nchips = 0;
        this.bateria = new Bateria[marcaBateria];
        this.chips = new Chip [2];
    }
    mostrar(){
        return `marca: ${this.modelo} bateria: ${this.bateria} chips : ${this.chips}`;
    }
    agregarChip (nuevoChip:Chip){
        if (this.nchips<2){
            this.chips[this.nchips] = nuevoChip;
            this.nchips++;
        }
    }
}

const celular1= new Celular("asd","2","123",)

const chipM= new Chip("movistar",15594987)

celular1.agregarChip(chipM);

console.log(celular1)