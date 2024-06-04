import { Routes } from '@angular/router';
import { MessageFormComponent } from './message-form/message-form.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';

export const routes: Routes = [

    {  path: 'message',  component: MessageFormComponent },
    {  path: 'greeting',  component: GreetingComponent },
    {  path: 'skills',  component: SkillsComponent },
    {  path: 'movies',  component: DisplayMoviesComponent },

];
