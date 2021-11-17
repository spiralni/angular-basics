import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true
  serverCreationStatus: string = "No servers where created"
  serverName: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  toggleButtonStatus(): void {
    this.allowNewServer = !this.allowNewServer
  }

  onCreateServer(): void {
    this.serverCreationStatus = "A server was created"
  }

  onUpateServerName(e: Event): void {
    this.serverName = (<HTMLInputElement>e.target).value
  }
}
