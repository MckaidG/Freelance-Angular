import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal( 15,'Abc company', 'http://portfolio.mckaidcgustafson.com', 'ruby on rails', 150, 200, 15, 'mckaidcgustafson@gmail.com'
)
	proposalTwo: Proposal = new Proposal( 15,'Abc any', 'http://portfolio.mckaidcgustafson.com', 'ruby on rails', 150, 200, 15, 'mckaidcgustafson@gmail.com'
)
	proposalThree: Proposal = new Proposal( 15,'the company', 'http://portfolio.mckaidcgustafson.com', 'ruby on rails', 150, 200, 15, 'mckaidcgustafson@gmail.com'
)
proposals: Proposal[] = [
	this.proposalOne,
	this.proposalTwo,
	this.proposalThree
]

}
