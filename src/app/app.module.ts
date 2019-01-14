import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { EliteApi } from '../providers/elite-api/elite-api';
import { HttpModule } from '@angular/http';
import { UserSettings } from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';
import { AgmCoreModule } from '@agm/core';
import { SqlStorage } from '../providers/sql-storage/sql-storage';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    MapPage,
    StandingsPage,
    TeamHomePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage, 
    GamePage,
    MapPage,
    StandingsPage,
    TeamHomePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    UserSettings,
    SqlStorage,
    SQLite
  ]
})
export class AppModule {}
