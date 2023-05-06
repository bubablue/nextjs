// /* eslint-disable react/jsx-key */
// import { Box, createStyles } from "@material-ui/core";
// import { Theme } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";
// import { useQuery } from "react-query";
// import { TeamLogo } from "../../Components/TeamLogo";
// import Colours from "../../Context/Theme/Colours";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       padding: "100px",
//       paddingBottom: "100px",
//       background: Colours.BW[theme.palette.mode],
//     },
//     mainHeader: {
//       display: "flex",
//       justifyContent: "center",
//       justifySelf: "center",
//       alignItems: "center",
//       textAlign: "center",
//       background: Colours.BW_02[theme.palette.mode],
//       border: 0,
//       borderRadius: 10,
//       // boxShadow: "0 3px 10px 2px grey",
//       color: Colours.BW[theme.palette.mode],
//       height: 100,
//       padding: "10px",
//       margin: "50px 5% 50px 5%",
//       width: "90%",
//     },
//     header: {
//       display: "flex",
//       justifyContent: "center",
//       justifySelf: "center",
//       alignItems: "center",
//       textAlign: "center",
//       background: Colours.BW_02[theme.palette.mode],
//       border: 0,
//       borderRadius: 10,
//       // boxShadow: "0 3px 5px 2px grey",
//       color: Colours.BW[theme.palette.mode],
//       height: 80,
//       padding: "10px",
//       margin: "50px 10% 50px 10%",
//       width: "80%",
//     },
//     teams: {
//       display: "flex",
//       justifyContent: "center",
//       justidyItems: "center",
//       alignItems: "center",
//       flexWrap: "wrap",
//       // margin: "20px",
//     },
//     team: {
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       margin: "10px",
//       padding: "20px",
//       // border: '5px solid black',
//       borderRadius: "10px",
//       // width: '200px',
//       // height: '200px',
//     },
//     textBox: {
//       display: "block",
//       margin: "20px",
//       textDecoration: "none",
//       font: "15px Arial, sans-serif",
//       color: Colours.BW_02[theme.palette.mode],
//     },
//     numbers: {
//       color: "grey",
//       textAlign: "center",
//     },
//     images: {
//       height: "200px",
//       width: "200px",
//     },
//   })
// );

// export const Standings = () => {
//   const classes = useStyles();

//   async function stand() {
//     const response = await fetch(
//       "https://statsapi.web.nhl.com/api/v1/standings"
//     );
//     const data = await response.json();
//     return data;
//   }

//   const { data, status } = useQuery("Standings", stand, {
//     enabled: true,
//     refetchOnWindowFocus: false,
//   });

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }
//   if (status === "error") {
//     return <p>Error</p>;
//   }

//   return (
//     <div className={classes.root}>
//       <h1 className={classes.mainHeader}>Standings</h1>
//       {data.records.map((record: any) => {
//         return (
//           <div key={`${record.division.name}-main`}>
//             <h2
//               className={classes.header}
//               key={`${record.division.name}-header`}
//             >
//               {record.division.name}
//             </h2>
//             {record.teamRecords.map((team: any) => {
//               return (
//                 <div className={classes.teams} key={`${team.team.name}-teams`}>
//                   <TeamLogo
//                     team={team.team.name}
//                     teamId={team.team.name}
//                     height="200px"
//                     width="200px"
//                     key={`${team.team.name}-logo`}
//                   />
//                   <div className={classes.team} key={`${team.team.name}-main`}>
//                     <div
//                       className={classes.textBox}
//                       key={`${team.team.name}-name`}
//                     >
//                       <h3 key={`${team.team.name}-name_1`}>Points</h3>
//                       <p
//                         className={classes.numbers}
//                         key={`${team.team.name}-points`}
//                       >
//                         {team.points}
//                       </p>
//                     </div>
//                     <div
//                       className={classes.textBox}
//                       key={`${team.team.name}-wins_0`}
//                     >
//                       <h3 key={`${team.team.name}-wins_2`}>Wins</h3>
//                       <p
//                         className={classes.numbers}
//                         key={`${team.team.name}-wins_3`}
//                       >
//                         {team.leagueRecord.wins}
//                       </p>
//                     </div>
//                     <div
//                       className={classes.textBox}
//                       key={`${team.team.name}-losses_0`}
//                     >
//                       <h3 key={`${team.team.name}-losses_2`}>Losses</h3>
//                       <p
//                         className={classes.numbers}
//                         key={`${team.team.name}-losses_3`}
//                       >
//                         {team.leagueRecord.losses}
//                       </p>
//                     </div>
//                     <div
//                       className={classes.textBox}
//                       key={`${team.team.name}-ot_0`}
//                     >
//                       <h3 key={`${team.team.name}-ot_1`}>Overtime Losses</h3>
//                       <p
//                         className={classes.numbers}
//                         key={`${team.team.name}-ot_2`}
//                       >
//                         {team.leagueRecord.ot}
//                       </p>
//                     </div>
//                     <div
//                       className={classes.textBox}
//                       key={`${team.team.name}-gamesPlayed`}
//                     >
//                       <h3 key={`${team.team.name}-gamesPlayed_1`}>
//                         Games Played
//                       </h3>
//                       <p
//                         className={classes.numbers}
//                         key={`${team.team.name}-gamesPlayed_2`}
//                       >
//                         {team.gamesPlayed}
//                       </p>
//                     </div>
//                     <div
//                       className={classes.textBox}
//                       key={`${team.team.name}-streak`}
//                     >
//                       <h3 key={`${team.team.name}-streak_2`}>Streak</h3>
//                       <p
//                         className={classes.numbers}
//                         key={`${team.team.name}-streak_3`}
//                       >
//                         {team.streak.streakCode}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//       {/* {schedule.dates.map((date) => {
//                     return date.games.map((game) => {
//                       if (game.teams.home.team.id === team.id || game.teams.away.team.id === team.id) {
//                         wins.push({team: team.name, wins: game.teams.home.leagueRecord.wins})
//                         return console.log(team.name, wins)
//                       }
//                     });
//                   })} */}
//     </div>
//   );
// };

// export default Standings;
import React from 'react'

export const index = () => {
  return (
    <div>index</div>
  )
}
export default index
