import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { ChatMessages } from './components/chat-messages/chat-messages.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { HubComponent } from './components/hub/hub.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserChatsComponent } from './components/user-chats/user-chats.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NewMessageComponent,
    ChatMessages,
    LeftSideBarComponent,
    ChatListComponent,
    NavBarComponent,
    UserComponent,
    HubComponent,
    RegisterComponent,
    LoginComponent,
    UserChatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
