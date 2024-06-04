import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill';
import { Level } from '../types/level';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills!: Skill [];
  dataService!: SkillsService;
  //private skillsService! : SkillsService;
  //constructor(skillsService : SkillsService) { this.skillsService = skillsService; this.dataService = skillsService; }
  constructor (private skillsService : SkillsService) { this.dataService = skillsService;}   // essentially same as two lines above
  ngOnInit() {
    //this.skills = this.skillsService.skills; console.log("skillsComponent created");   // this is the old line
      this.dataService.getSkills().subscribe(skills => this.skills = skills);
           // anytime the 'observed' data changes, this 'callback' will be invoked
           //     this 'callback' is invoked with the new data loaded into the lambda parameter described on the left side of the =>
            //    on the right side of the => the code updates the variable in this instance on line 15 with the new changed data 
           
  }
}
