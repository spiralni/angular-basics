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
  username: string = ''
  isServerCreated: boolean = false
  servers: string[] = ['server1', 'server2']

  constructor() { }

  ngOnInit(): void {
  }

  toggleButtonStatus(): void {
    this.allowNewServer = !this.allowNewServer
  }

  onCreateServer(): void {
    this.isServerCreated = true
    this.serverCreationStatus = `A server with name ${this.serverName} was created`
    this.servers.push(this.serverName)
  }

  onUpateServerName(e: Event): void {
    this.serverName = (<HTMLInputElement>e.target).value
  }

  resetUserName(): void { 
    this.username = '' 
  }
}
