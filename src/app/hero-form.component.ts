import {Component} from '@angular/core';
import {Hero} from './hero';
import {Agendamento} from './agendamento';
import {SelectMultipleComponent} from './select-multiple.component';
import {SelectDuplaComponent} from './select-dupla.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	moduleId: module.id,
	selector: 'hero-form',
	styleUrls: [ './hero-form.component.css' ],
	templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

	today;

	gestores = [];

	dupla = '';

	constructor(){
		this.today = Date.now();
		console.log("Avaliado", this.model.name);
		console.log("Dupla Avaiadora", this.dupla);
	}

	locais = ['Reuniões Grande', 'Reuniões Média', 'Reuniões Pequena'];

	tipos = ['Avaliação', 'Pré-avaliação'];

	agendamento;

	DataAgendamento;

	model = new Agendamento(18, 'Mariana Fernandez', this.locais[0], '', this.tipos[0]);
	
	valDate = true;

	submitted = false;

	checkDate(){
		this.today = Date.now();
		this.DataAgendamento = new Date(this.agendamento).getTime();
		if(this.DataAgendamento > this.today){
			this.valDate = true;
			this.model.data = this.agendamento;
		}
		else this.valDate = false;

	}

	onSubmit(){
		this.submitted = true;
		console.log("Gestores avaliadores", this.gestores);
	}

	newHero() {
  		this.model = new Agendamento(42, '', '', '', '');
	}

	getList(value:any){
		this.gestores = value;
		console.log("Gestores", this.gestores);
	}

	getDupla(value:any){
		this.dupla = value;
		console.log("Avaliado", this.model.name);
		console.log("Dupla Avaiadora", this.dupla);
	}

}