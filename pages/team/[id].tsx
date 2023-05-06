// import { useMediaQuery } from "@mui/material";
// import axios from "axios";
// import { useRouter } from "next/router";
// import React, { useCallback } from "react";
// import { useQuery } from "react-query";
// import { Players } from "../../Components/Stats/Players";
// import { Stats } from "../../Components/Stats/Stats";
// import { TeamLogo } from "../../Components/TeamLogo";
// import { Accordion, Components, DateDiv, LinkButton, Root, Score, Section, Subtitle, Teams, Title } from "../../styles/team";
// // import useStyles from "../../styles/team";

// export const TeamStats = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   // const classes = useStyles();
//   const isMobile = useMediaQuery("(max-width: 1000px)");

//   const [display, setDisplay] = React.useState<boolean>(false);
//   const [data, setData] = React.useState<any>([]);

//   let getStats = useCallback(async () => {
//     const response = await axios.get(
//       `https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-01-01&endDate=2023-12-31&hydrate=team,linescore,metadata,seriesSummary(series)&teamId=${id}&site=en_nhlCA&expand=schedule.teams,schedule.linescore,schedule.broadcasts.all,schedule.ticket,schedule.game.seriesSummary`
//     );
//     setData(response.data.dates);
//     return response.data;
//   }, [id]);

//   let getTeamName = useCallback(async () => {
//     const response = await axios.get(
//       `https://statsapi.web.nhl.com/api/v1/teams/${id}`
//     );
//     return response.data.teams[0].name;
//   }, [id]);

//   const { data: teamName } = useQuery(["Team", id], getTeamName, {
//     enabled: router.isReady,
//     refetchOnWindowFocus: false,
//   });

//   const { status: statsStatus, isLoading } = useQuery(
//     ["Schedule", id],
//     getStats,
//     {
//       enabled: router.isReady,
//       refetchOnWindowFocus: false,
//       refetchInterval: 5000,
//     }
//   );

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }
//   if (statsStatus === "error") {
//     return <p>Error</p>;
//   }

//   const handleChange = () => {
//     setDisplay(!display);
//   };

//   return !isMobile ? (
//     <Root>
//       <Title>Team Stats</Title>
//       <Subtitle>
//         <h2>{teamName}</h2>
//       </Subtitle>
//       <Section>
//         <h2>Team Stats</h2>
//         {
//           <div>
//             {data.map((stats: any) => {
//               return (
//                 <div key={stats.games[0].teams.home.team.id}>
//                   {stats.games.map((game: any) => {
//                     return (
//                       <Accordion
//                         key={game.teams.home.team.id}
//                       >
//                         <Teams>
//                           <DateDiv onClick={handleChange}>
//                             <h3>
//                               {game.teams.home.team.name} -{" "}
//                               {game.teams.away.team.name}
//                             </h3>
//                             <p style={{ color: "grey" }}>
//                               {new Date(game.gameDate).toLocaleDateString(
//                                 "en-US",
//                                 {
//                                   weekday: "long",
//                                   year: "numeric",
//                                   month: "long",
//                                   day: "numeric",
//                                 }
//                               )}
//                             </p>
//                           </DateDiv>
//                           {display ? (
//                             <div>
//                               <h3
//                                 style={{
//                                   display: "flex",
//                                   flexDirection: "row",
//                                   alignContent: "center",
//                                   alignItems: "center",
//                                 }}
//                               >
//                                 <TeamLogo
//                                   height="300px"
//                                   width="300px"
//                                   team={game.teams.home.team.name}
//                                   teamId={game.teams.home.team.id}
//                                 />
//                                 <Score>
//                                   {game.teams.home.score} -{" "}
//                                   {game.teams.away.score}
//                                 </Score>
//                                 <TeamLogo
//                                   height="300px"
//                                   width="300px"
//                                   team={game.teams.away.team.name}
//                                   teamId={game.teams.home.team.id}
//                                 />
//                               </h3>
//                             </div>
//                           ) : (
//                             <Components>
//                               <h1>Stats</h1>
//                               <Stats gamePk={{ gamePk: game.gamePk }}>
//                                 <Players gamePk={{ gamePk: game.gamePk }}>
//                                   <Score>
//                                     {game.teams.home.score} -{" "}
//                                     {game.teams.away.score}
//                                   </Score>
//                                 </Players>
//                               </Stats>
//                             </Components>
//                           )}
//                         </Teams>
//                         <div>
//                           {game.tickets?.map((ticket: any) => {
//                             return (
//                               game.status.abstractGameState != "Final" && (
//                                 <div key={ticket.ticketLink}>
//                                   <LinkButton
//                                     href={ticket.ticketLink}
//                                   >
//                                     {ticket.ticketType}
//                                   </LinkButton>
//                                 </div>
//                               )
//                             );
//                           })}
//                         </div>
//                       </Accordion>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
//         }
//       </Section>
//     </Root>
//   ) : (
//     <Root>
//       <Title>Team Stats</Title>
//       <Subtitle>
//         <h2>{teamName}</h2>
//       </Subtitle>
//       <Section>
//         <h2>Team Stats</h2>
//         {
//           <div>
//             {data.map((stats: any) => {
//               return (
//                 <div key={stats.games[0].teams.home.team.id}>
//                   {stats.games.map((game: any) => {
//                     return (
//                       <Accordion
//                         key={game.teams.home.team.id}
//                       >
//                         <Teams>
//                           <DateDiv>
//                             <h3>
//                               {game.teams.home.team.name} -{" "}
//                               {game.teams.away.team.name}
//                             </h3>
//                             <p style={{ color: "grey" }}>
//                               {new Date(game.gameDate).toLocaleDateString(
//                                 "en-US",
//                                 {
//                                   weekday: "long",
//                                   year: "numeric",
//                                   month: "long",
//                                   day: "numeric",
//                                 }
//                               )}
//                             </p>
//                           </DateDiv>
//                           <div>
//                             <h3
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 alignContent: "center",
//                                 alignItems: "center",
//                               }}
//                             >
//                               <TeamLogo
//                                 height="60px"
//                                 width="60px"
//                                 team={game.teams.home.team.name}
//                                 teamId={game.teams.home.team.id}
//                               />
//                               <Score>
//                                 {game.teams.home.score} -{" "}
//                                 {game.teams.away.score}
//                               </Score>
//                               <TeamLogo
//                                 height="60px"
//                                 width="60px"
//                                 team={game.teams.away.team.name}
//                                 teamId={game.teams.home.team.id}
//                               />
//                             </h3>
//                           </div>
//                         </Teams>
//                         <div>
//                           {game.tickets?.map((ticket: any) => {
//                             return (
//                               game.status.abstractGameState != "Final" && (
//                                 <div>
//                                   <LinkButton
//                                     href={ticket.ticketLink}
//                                   >
//                                     {ticket.ticketType}
//                                   </LinkButton>
//                                 </div>
//                               )
//                             );
//                           })}
//                         </div>
//                       </Accordion>
//                     );
//                   })}
//                 </div>
//               );
//             })}
//           </div>
//         }
//       </Section>
//     </Root>
//   );
// };

// export default TeamStats;
