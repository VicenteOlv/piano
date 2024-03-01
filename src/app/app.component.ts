import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebaAngular';
  aplicarSonido(numero: number): void{
    let audio = new Audio();
    switch(numero){
      case 1:
        console.log("Hello, world!");
        audio.src="../assets/sounds/do-80236.mp3"
        audio.load();
        audio.play();
        break;
      case 2:
          audio.src='../assets/sounds/re-78500.mp3'
          audio.load();
          audio.play();
          break;
      case 3:
        audio.src='../assets/sounds/mi-80239.mp3'
        audio.load();
        audio.play();
        break;
      case 4:
        audio.src='../assets/sounds/fa-78409.mp3'
        audio.load();
        audio.play();
        break;
      case 5:
        audio.src='../assets/sounds/sol-101774.mp3'
        audio.load();
        audio.play();
        break;
      case 6:
        audio.src='../assets/sounds/la-80237.mp3'
        audio.load();
        audio.play();
        break;
      case 7:
        audio.src='../assets/sounds/si-80238.mp3'
        audio.load();
        audio.play();
        break;
    }
    
  }
}
