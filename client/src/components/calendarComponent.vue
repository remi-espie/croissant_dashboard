<template>
  <div class="box">
    <div v-for="course in this.courses" :key="course.uid" class="has-text-centered courses">
      <course-component :course="course"></course-component>
    </div>

  </div>
</template>

<script>
import ical from 'ical'
import CourseComponent from "@/components/courseComponent.vue";

export default {
  name: "calendarComponent",
  components: {CourseComponent},
  props: {
    url_schedule: String
  },
  data() {
    return {
      calendarExists: false,
      courses: [],
      EDT: "BEGIN:VCALENDAR\n" +
          "METHOD:REQUEST\n" +
          "PRODID:-//ADE/version 6.0\n" +
          "VERSION:2.0\n" +
          "CALSCALE:GREGORIAN\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221018T070000Z\n" +
          "DTEND:20221018T090000Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2157904#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nLOPEZ   CYRIL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323034382d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221018T090000Z\n" +
          "DTEND:20221018T110000Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2157905#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nLOPEZ   CYRIL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323034382d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221020T070000Z\n" +
          "DTEND:20221020T090000Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2157906#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nLOPEZ   CYRIL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323034382d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221020T091500Z\n" +
          "DTEND:20221020T111500Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2157907#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nLOPEZ   CYRIL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323034382d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221125T080000Z\n" +
          "DTEND:20221125T090000Z\n" +
          "SUMMARY:CM DDRS - ACV\n" +
          "LOCATION:Amphi Dumontet\n" +
          "DESCRIPTION:\\n#VERIFIE#02/12/2022##TRANSFERE#2223580#19/12/2022#\\nDO3-TOU\n" +
          " S\\nSTE3-TOUS\\nMSI3-TOUS\\nMI3-TOUS\\nMAT3-TOUS\\nIG3-TOUS\\nMEA3-TOUS\\nEGC3-\n" +
          " TOUS\\nSE3-TOUS\\nTransféré\\nBANTIGNIES   JEAN LOUIS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d33343330342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221213T070000Z\n" +
          "DTEND:20221213T090000Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nLOPEZ   CYRIL\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323034382d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230103T070000Z\n" +
          "DTEND:20230103T090000Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nLOPEZ   CYRIL\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323034382d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230522T134500Z\n" +
          "DTEND:20230522T151500Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230515T134500Z\n" +
          "DTEND:20230515T151500Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230522T120000Z\n" +
          "DTEND:20230522T133000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230407T120000Z\n" +
          "DTEND:20230407T133000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d3130\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230522T090000Z\n" +
          "DTEND:20230522T103000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230424T140000Z\n" +
          "DTEND:20230424T153000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d3131\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230407T134500Z\n" +
          "DTEND:20230407T151500Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d3134\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230515T120000Z\n" +
          "DTEND:20230515T133000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230505T103000Z\n" +
          "DTEND:20230505T120000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d3133\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230227T130000Z\n" +
          "DTEND:20230227T143000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d38\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230227T144500Z\n" +
          "DTEND:20230227T161500Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d39\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230310T151500Z\n" +
          "DTEND:20230310T164500Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d3132\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230424T120000Z\n" +
          "DTEND:20230424T133000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d37\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230327T114500Z\n" +
          "DTEND:20230327T131500Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230327T133000Z\n" +
          "DTEND:20230327T150000Z\n" +
          "SUMMARY:Développement Système II* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nORTIZ   SAMUEL\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353634302d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230201T130000Z\n" +
          "DTEND:20230201T143000Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230201T144500Z\n" +
          "DTEND:20230201T161500Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230203T130000Z\n" +
          "DTEND:20230203T143000Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230203T144500Z\n" +
          "DTEND:20230203T161500Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230208T130000Z\n" +
          "DTEND:20230208T143000Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230208T144500Z\n" +
          "DTEND:20230208T161500Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d37\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230210T130000Z\n" +
          "DTEND:20230210T143000Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230210T144500Z\n" +
          "DTEND:20230210T161500Z\n" +
          "SUMMARY:System Development 1 - Go -  CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGODEL   THOMAS\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313636372d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221024T081500Z\n" +
          "DTEND:20221024T094500Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134423#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221125T091500Z\n" +
          "DTEND:20221125T111500Z\n" +
          "SUMMARY:Projet DDRS - DO+IG+MEA+SE\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMEA3-TOUS\\nSE3-TOUS\\nIG3-TOUS\\nFIORIO   CHRISTO\n" +
          " PHE\\nROBERT   MICHEL\\nCOMTE   MARIANE\\nBERRY   VINCENT\\nGODARY DEJEAN   \n" +
          " KAREN\\nLAURENT   ANNE\\nA valider\\nFORTIN   JEROME\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d33343332372d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221018T120000Z\n" +
          "DTEND:20221018T133000Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134409#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221018T133000Z\n" +
          "DTEND:20221018T150000Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134410#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221018T150000Z\n" +
          "DTEND:20221018T163000Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134421#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221024T063000Z\n" +
          "DTEND:20221024T080000Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134422#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221024T104500Z\n" +
          "DTEND:20221024T121500Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134424#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221024T123000Z\n" +
          "DTEND:20221024T140000Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134425#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221024T141500Z\n" +
          "DTEND:20221024T144500Z\n" +
          "SUMMARY:101 SysAdmin - CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134426#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637302d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221024T144500Z\n" +
          "DTEND:20221024T151500Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221122T073000Z\n" +
          "DTEND:20221122T090000Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221122T090000Z\n" +
          "DTEND:20221122T103000Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221122T103000Z\n" +
          "DTEND:20221122T120000Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221213T130000Z\n" +
          "DTEND:20221213T143000Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221213T144500Z\n" +
          "DTEND:20221213T161500Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221216T103000Z\n" +
          "DTEND:20221216T120000Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230104T070000Z\n" +
          "DTEND:20230104T083000Z\n" +
          "SUMMARY:101 SysAdmin - CTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637332d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221115T144500Z\n" +
          "DTEND:20221115T161500Z\n" +
          "SUMMARY:101 SysAdmin - TP Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221115T161500Z\n" +
          "DTEND:20221115T164500Z\n" +
          "SUMMARY:101 SysAdmin - TP Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637342d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221115T120000Z\n" +
          "DTEND:20221115T133000Z\n" +
          "SUMMARY:101 SysAdmin - TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#30/11/2022##TRANSFERE#2196931#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637372d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221115T133000Z\n" +
          "DTEND:20221115T143000Z\n" +
          "SUMMARY:101 SysAdmin - TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#30/11/2022##TRANSFERE#2196932#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313637372d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221114T103000Z\n" +
          "DTEND:20221114T120000Z\n" +
          "SUMMARY:Pull Request Git\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGEORGES   THOMAS\\nValidé\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d37363331392d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221123T123000Z\n" +
          "DTEND:20221123T124500Z\n" +
          "SUMMARY:CM DDRS - VSS\n" +
          "LOCATION:Amphi Dumontet\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nSTE3-TOUS\\nMSI3-TOUS\\nMAT3-TOUS\\nGBA3-TOUS\\nMEA\n" +
          " 3-TOUS\\nSE3-TOUS\\nMI3-TOUS\\nEGC3-TOUS\\nSTRUB   CAROLINE\\nA valider\\n(Exp\n" +
          " orté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38383633322d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221121T090000Z\n" +
          "DTEND:20221121T093000Z\n" +
          "SUMMARY:INFORMATIONS MOBILITE INTERNATIONALE FISA3  (présence obligatoire\n" +
          " )\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nDO3-PUB\\nEGC3-PUB\\nSE3-PUB\\nMSI3-PUB\\nVisibilité\\nA valid\n" +
          " er\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39353330392d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221123T130000Z\n" +
          "DTEND:20221123T143000Z\n" +
          "SUMMARY:CM DDRS - Anthropocène\n" +
          "LOCATION:Amphi Dumontet\n" +
          "DESCRIPTION:\\n#VERIFIE#02/12/2022##TRANSFERE#2223558#19/12/2022#\\nDO3-TOU\n" +
          " S\\nSTE3-TOUS\\nMSI3-TOUS\\nMI3-TOUS\\nMAT3-TOUS\\nIG3-TOUS\\nGBA3-TOUS\\nMEA3-\n" +
          " TOUS\\nEGC3-TOUS\\nSE3-TOUS\\nBANTIGNIES   JEAN LOUIS\\nTransféré\\n(Exporté \n" +
          " le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31383030392d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230526T130000Z\n" +
          "DTEND:20230526T143000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230526T150000Z\n" +
          "DTEND:20230526T163000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230526T103000Z\n" +
          "DTEND:20230526T120000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230526T083000Z\n" +
          "DTEND:20230526T100000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230331T080000Z\n" +
          "DTEND:20230331T093000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3135\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230331T123000Z\n" +
          "DTEND:20230331T140000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3134\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230331T141500Z\n" +
          "DTEND:20230331T154500Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3139\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230526T064500Z\n" +
          "DTEND:20230526T081500Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230428T144500Z\n" +
          "DTEND:20230428T161500Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230428T100000Z\n" +
          "DTEND:20230428T113000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3133\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230331T094500Z\n" +
          "DTEND:20230331T111500Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3137\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230428T080000Z\n" +
          "DTEND:20230428T093000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3130\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230428T130000Z\n" +
          "DTEND:20230428T143000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221124T070000Z\n" +
          "DTEND:20221124T083000Z\n" +
          "SUMMARY:CM DDRS - Energie\n" +
          "LOCATION:Amphi Dumontet\n" +
          "DESCRIPTION:\\n#VERIFIE#29/11/2022##TRANSFERE#2187516#19/12/2022#\\nDO3-TOU\n" +
          " S\\nSTE3-TOUS\\nMSI3-TOUS\\nMI3-TOUS\\nMAT3-TOUS\\nIG3-TOUS\\nGBA3-TOUS\\nMEA3-\n" +
          " TOUS\\nEGC3-TOUS\\nSE3-TOUS\\nTransféré\\nFINAUD GUYOT   PASCAL\\n(Exporté le\n" +
          " :26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31383031332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230428T061500Z\n" +
          "DTEND:20230428T074500Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3138\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230331T060000Z\n" +
          "DTEND:20230331T073000Z\n" +
          "SUMMARY:Container & Orchestration\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nMULLER   NICOLAS\\nA valider\\n(Exporté le:26/12/\n" +
          " 2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353732352d302d3131\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221124T120000Z\n" +
          "DTEND:20221124T133000Z\n" +
          "SUMMARY:CM DDRS - Ressources\n" +
          "LOCATION:Amphi Dumontet\n" +
          "DESCRIPTION:\\n#VERIFIE#02/12/2022##TRANSFERE#2223577#19/12/2022#\\nDO3-TOU\n" +
          " S\\nSTE3-TOUS\\nMSI3-TOUS\\nMI3-TOUS\\nMAT3-TOUS\\nIG3-TOUS\\nGBA3-TOUS\\nMEA3-\n" +
          " TOUS\\nEGC3-TOUS\\nSE3-TOUS\\nTransféré\\nBANTIGNIES   JEAN LOUIS\\n(Exporté \n" +
          " le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31383032352d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221026T124500Z\n" +
          "DTEND:20221026T141500Z\n" +
          "SUMMARY:Introduction au Control Version Systems Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037322d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221026T110000Z\n" +
          "DTEND:20221026T123000Z\n" +
          "SUMMARY:Introduction au Control Version Systems Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037322d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221026T081500Z\n" +
          "DTEND:20221026T094500Z\n" +
          "SUMMARY:Introduction au Control Version Systems Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037322d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221026T063000Z\n" +
          "DTEND:20221026T080000Z\n" +
          "SUMMARY:Introduction au Control Version Systems Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037322d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221017T060000Z\n" +
          "DTEND:20221017T170000Z\n" +
          "SUMMARY:Rentrée FISA\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nDO3-PUB\\nEGC3-PUB\\nSE3-PUB\\nMSI3-PUB\\nA valider\\nVisibili\n" +
          " té\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d3130362d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221019T121500Z\n" +
          "DTEND:20221019T134500Z\n" +
          "SUMMARY:Introduction WOA TP Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221020T121500Z\n" +
          "DTEND:20221020T134500Z\n" +
          "SUMMARY:Introduction WOA TP Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037342d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221020T140000Z\n" +
          "DTEND:20221020T153000Z\n" +
          "SUMMARY:Introduction WOA TP Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037342d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221027T063000Z\n" +
          "DTEND:20221027T080000Z\n" +
          "SUMMARY:Introduction WOA TP Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037342d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221027T081500Z\n" +
          "DTEND:20221027T094500Z\n" +
          "SUMMARY:Introduction WOA TP Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38343037342d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230503T133000Z\n" +
          "DTEND:20230503T150000Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230503T114500Z\n" +
          "DTEND:20230503T131500Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230524T110000Z\n" +
          "DTEND:20230524T123000Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230524T124500Z\n" +
          "DTEND:20230524T141500Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230524T143000Z\n" +
          "DTEND:20230524T160000Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d38\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230621T114500Z\n" +
          "DTEND:20230621T131500Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230621T133000Z\n" +
          "DTEND:20230621T150000Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230628T113000Z\n" +
          "DTEND:20230628T130000Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230628T131500Z\n" +
          "DTEND:20230628T144500Z\n" +
          "SUMMARY:102 Industrialisation / CI/CD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLEROY   GUILLAUME\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734302d302d37\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230601T134500Z\n" +
          "DTEND:20230601T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230629T134500Z\n" +
          "DTEND:20230629T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230629T120000Z\n" +
          "DTEND:20230629T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230622T134500Z\n" +
          "DTEND:20230622T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230622T120000Z\n" +
          "DTEND:20230622T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230330T120000Z\n" +
          "DTEND:20230330T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d392d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230406T120000Z\n" +
          "DTEND:20230406T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230309T130000Z\n" +
          "DTEND:20230309T143000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230427T120000Z\n" +
          "DTEND:20230427T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230601T120000Z\n" +
          "DTEND:20230601T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230406T134500Z\n" +
          "DTEND:20230406T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230427T134500Z\n" +
          "DTEND:20230427T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230302T141500Z\n" +
          "DTEND:20230302T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230330T134500Z\n" +
          "DTEND:20230330T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230525T134500Z\n" +
          "DTEND:20230525T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230525T120000Z\n" +
          "DTEND:20230525T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230504T120000Z\n" +
          "DTEND:20230504T133000Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230504T134500Z\n" +
          "DTEND:20230504T151500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230309T144500Z\n" +
          "DTEND:20230309T161500Z\n" +
          "SUMMARY:Anglais 2\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353734362d31372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221125T133000Z\n" +
          "DTEND:20221125T153000Z\n" +
          "SUMMARY:Conférence\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nSE3-TOUS\\nMEA3-TOUS\\nMI3-TOUS\\nGBA3-TOUS\\nSTE3-TOUS\\nMSI3\n" +
          " -TOUS\\nMAT3-TOUS\\nEGC3-TOUS\\nIG3-TOUS\\nDO3-TOUS\\nA valider\\nPAPET   PHIL\n" +
          " IPPE\\nFINAUD GUYOT   PASCAL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38383731372d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230130T070000Z\n" +
          "DTEND:20230130T083000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230131T091500Z\n" +
          "DTEND:20230131T104500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nFACERIAS   MICHEL\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221114T084500Z\n" +
          "DTEND:20221114T101500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#06/12/2022##TRANSFERE#2252457#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nGODEL   THOMAS\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230131T070000Z\n" +
          "DTEND:20230131T090000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nFACERIAS   MICHEL\\nA valider\\n(Exporté le:26/12\n" +
          " /2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221214T151500Z\n" +
          "DTEND:20221214T164500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221114T070000Z\n" +
          "DTEND:20221114T083000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#06/12/2022##TRANSFERE#2252456#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nGODEL   THOMAS\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221214T130000Z\n" +
          "DTEND:20221214T150000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230104T151500Z\n" +
          "DTEND:20230104T164500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221116T120000Z\n" +
          "DTEND:20221116T140000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#06/12/2022##TRANSFERE#2252458#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nGODEL   THOMAS\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230104T130000Z\n" +
          "DTEND:20230104T150000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230130T084500Z\n" +
          "DTEND:20230130T101500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230113T103000Z\n" +
          "DTEND:20230113T120000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221028T113000Z\n" +
          "DTEND:20221028T133000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134468#20/11/2022#\\nDO3-TOU\n" +
          " S\\nFACERIAS   MICHEL\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31392d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221028T134500Z\n" +
          "DTEND:20221028T154500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134469#20/11/2022#\\nDO3-TOU\n" +
          " S\\nFACERIAS   MICHEL\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230113T084500Z\n" +
          "DTEND:20230113T101500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d392d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230109T130000Z\n" +
          "DTEND:20230109T143000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230111T144500Z\n" +
          "DTEND:20230111T161500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230111T130000Z\n" +
          "DTEND:20230111T143000Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230109T144500Z\n" +
          "DTEND:20230109T161500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nGODEL   THOMAS\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221116T141500Z\n" +
          "DTEND:20221116T154500Z\n" +
          "SUMMARY:RDBMS\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#06/12/2022##TRANSFERE#2252459#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nGODEL   THOMAS\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313137352d31332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230206T130000Z\n" +
          "DTEND:20230206T143000Z\n" +
          "SUMMARY:Examen Theorie des Organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383739342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230110T084500Z\n" +
          "DTEND:20230110T101500Z\n" +
          "SUMMARY:101 SysAdmin -  CTD Architecture physique\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nSASSATELLI   GILLES\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383830342d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230110T103000Z\n" +
          "DTEND:20230110T120000Z\n" +
          "SUMMARY:101 SysAdmin -  CTD Architecture physique\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nSASSATELLI   GILLES\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383830342d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230307T080000Z\n" +
          "DTEND:20230307T093000Z\n" +
          "SUMMARY:101 SysAdmin -  CTD Architecture physique\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nSASSATELLI   GILLES\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383830342d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230307T094500Z\n" +
          "DTEND:20230307T111500Z\n" +
          "SUMMARY:101 SysAdmin -  CTD Architecture physique\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nSASSATELLI   GILLES\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383830342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221121T090000Z\n" +
          "DTEND:20221121T093000Z\n" +
          "SUMMARY:Informations Mobilité\\, Présence Obligatoire 3A (FISA)\n" +
          "LOCATION:Amphi Peytavin\n" +
          "DESCRIPTION:\\n\\nDO3-PUB\\nEGC3-PUB\\nSE3-PUB\\nMSI3-PUB\\nA valider\\n(Exporté\n" +
          "  le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d37373536332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230110T070000Z\n" +
          "DTEND:20230110T083000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230111T070000Z\n" +
          "DTEND:20230111T083000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230113T070000Z\n" +
          "DTEND:20230113T083000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230201T070000Z\n" +
          "DTEND:20230201T083000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230201T084500Z\n" +
          "DTEND:20230201T101500Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230201T103000Z\n" +
          "DTEND:20230201T120000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230210T070000Z\n" +
          "DTEND:20230210T083000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230210T084500Z\n" +
          "DTEND:20230210T101500Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139362d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230203T070000Z\n" +
          "DTEND:20230203T083000Z\n" +
          "SUMMARY:00 Web Development S6 Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139382d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230203T084500Z\n" +
          "DTEND:20230203T101500Z\n" +
          "SUMMARY:00 Web Development S6 Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139382d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230203T103000Z\n" +
          "DTEND:20230203T120000Z\n" +
          "SUMMARY:00 Web Development S6 Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139382d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230208T070000Z\n" +
          "DTEND:20230208T083000Z\n" +
          "SUMMARY:00 Web Development S6 Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139382d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230208T084500Z\n" +
          "DTEND:20230208T101500Z\n" +
          "SUMMARY:00 Web Development S6 Async\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31393139382d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230130T103000Z\n" +
          "DTEND:20230130T120000Z\n" +
          "SUMMARY:Projet Voltaire\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nGUERRINI   ELEONORA\\nA valider\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333352d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221114T130000Z\n" +
          "DTEND:20221114T143000Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#29/11/2022##TRANSFERE#2207593#19/12/2022#\\nDO3-TOU\n" +
          " S\\nCHAPELLIER   PHILIPPE\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230130T130000Z\n" +
          "DTEND:20230130T143000Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d38\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230130T144500Z\n" +
          "DTEND:20230130T161500Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d39\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221212T130000Z\n" +
          "DTEND:20221212T143000Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230131T144500Z\n" +
          "DTEND:20230131T161500Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d3130\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221114T144500Z\n" +
          "DTEND:20221114T161500Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#29/11/2022##TRANSFERE#2207594#19/12/2022#\\nDO3-TOU\n" +
          " S\\nCHAPELLIER   PHILIPPE\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230103T130000Z\n" +
          "DTEND:20230103T143000Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230103T144500Z\n" +
          "DTEND:20230103T161500Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221212T144500Z\n" +
          "DTEND:20221212T161500Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230111T103000Z\n" +
          "DTEND:20230111T120000Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d37\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230111T084500Z\n" +
          "DTEND:20230111T101500Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230131T130000Z\n" +
          "DTEND:20230131T143000Z\n" +
          "SUMMARY:Théorie des organisations\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCHAPELLIER   PHILIPPE\\nA valider\\n(Exporté le:2\n" +
          " 6/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333333362d302d3131\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230109T103000Z\n" +
          "DTEND:20230109T120000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database\n" +
          "LOCATION:Classe Virtuelle (CV) EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCASTELLTORT   ARNAUD\\nA valider\\n(Exporté le:26\n" +
          " /12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833322d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230306T103000Z\n" +
          "DTEND:20230306T120000Z\n" +
          "SUMMARY:NoSQL Document-Oriented Database\n" +
          "LOCATION:Classe Virtuelle (CV) EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nCASTELLTORT   ARNAUD\\nA valider\\n(Exporté le:26\n" +
          " /12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833322d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221214T070000Z\n" +
          "DTEND:20221214T083000Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLAURENT   ANNE\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221215T144500Z\n" +
          "DTEND:20221215T161500Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLAURENT   ANNE\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d392d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221117T070000Z\n" +
          "DTEND:20221117T083000Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2247833#19/12/2022#\\nDO3-TOU\n" +
          " S\\nLAURENT   ANNE\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221117T084500Z\n" +
          "DTEND:20221117T101500Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2247834#19/12/2022#\\nDO3-TOU\n" +
          " S\\nLAURENT   ANNE\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221117T103000Z\n" +
          "DTEND:20221117T120000Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2247835#19/12/2022#\\nDO3-TOU\n" +
          " S\\nLAURENT   ANNE\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221117T130000Z\n" +
          "DTEND:20221117T143000Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2247836#19/12/2022#\\nDO3-TOU\n" +
          " S\\nLAURENT   ANNE\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221117T144500Z\n" +
          "DTEND:20221117T161500Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2247837#19/12/2022#\\nDO3-TOU\n" +
          " S\\nLAURENT   ANNE\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221214T084500Z\n" +
          "DTEND:20221214T101500Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLAURENT   ANNE\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221215T130000Z\n" +
          "DTEND:20221215T143000Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLAURENT   ANNE\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221214T103000Z\n" +
          "DTEND:20221214T120000Z\n" +
          "SUMMARY:Conception de SI\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nLAURENT   ANNE\\nA valider\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313833332d382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230202T070000Z\n" +
          "DTEND:20230202T083000Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221215T070000Z\n" +
          "DTEND:20221215T083000Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230209T084500Z\n" +
          "DTEND:20230209T101500Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221215T084500Z\n" +
          "DTEND:20221215T101500Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230105T070000Z\n" +
          "DTEND:20230105T083000Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230105T084500Z\n" +
          "DTEND:20230105T101500Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d39\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230112T070000Z\n" +
          "DTEND:20230112T083000Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230209T070000Z\n" +
          "DTEND:20230209T083000Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230112T084500Z\n" +
          "DTEND:20230112T101500Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d38\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230202T084500Z\n" +
          "DTEND:20230202T101500Z\n" +
          "SUMMARY:Cloud Technologies S5* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323335332d302d37\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221122T140000Z\n" +
          "DTEND:20221122T170000Z\n" +
          "SUMMARY:Semaine Internationale - Echanges en petits groupes Etudiants / P\n" +
          " artenaires\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nDO3-PUB\\nEGC3-PUB\\nMEA3-PUB\\nSE3-PUB\\nGBA3-PUB\\nIG3-PUB\\n\n" +
          " MAT3-PUB\\nMI3-PUB\\nMSI3-PUB\\nSTE3-PUB\\nVisibilité\\nA valider\\n(Exporté l\n" +
          " e:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d32303739302d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221215T103000Z\n" +
          "DTEND:20221215T120000Z\n" +
          "SUMMARY:Cloud Technologies S5* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323336382d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230105T103000Z\n" +
          "DTEND:20230105T120000Z\n" +
          "SUMMARY:Cloud Technologies S5* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323336382d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230112T103000Z\n" +
          "DTEND:20230112T120000Z\n" +
          "SUMMARY:Cloud Technologies S5* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323336382d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230202T103000Z\n" +
          "DTEND:20230202T120000Z\n" +
          "SUMMARY:Cloud Technologies S5* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323336382d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230209T103000Z\n" +
          "DTEND:20230209T120000Z\n" +
          "SUMMARY:Cloud Technologies S5* TP\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nTEYCHENE   FRANCOIS\\n(Exporté le:26/\n" +
          " 12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323336382d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230207T070000Z\n" +
          "DTEND:20230207T090000Z\n" +
          "SUMMARY:101 Gestion de configuration*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nPOUCHOULON   JEAN MARC\\nA valider\\n(Exporté le:\n" +
          " 26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323337332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230207T091500Z\n" +
          "DTEND:20230207T111500Z\n" +
          "SUMMARY:101 Gestion de configuration*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nPOUCHOULON   JEAN MARC\\nA valider\\n(Exporté le:\n" +
          " 26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323337332d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230207T123000Z\n" +
          "DTEND:20230207T143000Z\n" +
          "SUMMARY:101 Gestion de configuration*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nPOUCHOULON   JEAN MARC\\nA valider\\n(Exporté le:\n" +
          " 26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323337332d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230207T144500Z\n" +
          "DTEND:20230207T164500Z\n" +
          "SUMMARY:101 Gestion de configuration*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nPOUCHOULON   JEAN MARC\\nA valider\\n(Exporté le:\n" +
          " 26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d323337332d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221123T074500Z\n" +
          "DTEND:20221123T110000Z\n" +
          "SUMMARY:Fresque du Climat\n" +
          "LOCATION:SC102\\,SC003\\,Le Bocal\\,TD115\\,SC105\\,SC202\\,SC101\\,SC005\\,TD013\n" +
          " \\,Halle Matériaux\\,SC201\\,SC004\n" +
          "DESCRIPTION:\\n#VERIFIE#14/12/2022##TRANSFERE#2187534\\,2189974\\,2201234\\,2\n" +
          " 205771\\,2209953\\,2211358\\,2214520\\,2215154\\,2215295\\,2217980\\,2220774\\,2\n" +
          " 223611\\,2225453\\,2255378\\,2260111\\,2260352\\,2261114\\,2261458#19/12/2022#\n" +
          " \\nSE3-TOUS\\nMEA3-TOUS\\nMI3-TOUS\\nGBA3-TOUS\\nSTE3-TOUS\\nMSI3-TOUS\\nMAT3-T\n" +
          " OUS\\nEGC3-TOUS\\nIG3-TOUS\\nDO3-TOUS\\nLOPEZ   LYSIANE\\nGODARY DEJEAN   KAR\n" +
          " EN\\nFORTIN   JEROME\\nFINAUD GUYOT   PASCAL\\nNEPPEL   LUC\\nMORA   VALERIE\n" +
          " \\nMARCHESSEAU   SYLVIE\\nPAPET   PHILIPPE\\nMARCHAL   AURELIE\\nSOULIE   FA\n" +
          " BIEN\\nTransféré\\nTOULEMONDE   GWLADYS\\nMONTIGNY   CHRYSTELLE\\nPIARRISTEG\n" +
          " UY   ANDREA\\nSILLY   GILLES\\nBANTIGNIES   JEAN LOUIS\\nHOSTACHY   MAEVA\\n\n" +
          " COMTE   MARIANE\\nESPI   DELPHINE\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d31373232372d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221017T113000Z\n" +
          "DTEND:20221017T143000Z\n" +
          "SUMMARY:101 SysAdmin - TP Install Ubuntu\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142843#20/11/2022#\\nDO3-TOU\n" +
          " S\\nCASTELLTORT   ARNAUD\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d37313030362d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230106T070000Z\n" +
          "DTEND:20230106T083000Z\n" +
          "SUMMARY:System Development 1 TP - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313930302d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230106T084500Z\n" +
          "DTEND:20230106T101500Z\n" +
          "SUMMARY:System Development 1 TP - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313930302d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230106T103000Z\n" +
          "DTEND:20230106T120000Z\n" +
          "SUMMARY:System Development 1 TP - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313930302d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230106T130000Z\n" +
          "DTEND:20230106T143000Z\n" +
          "SUMMARY:System Development 1 TP - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313930302d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230106T144500Z\n" +
          "DTEND:20230106T161500Z\n" +
          "SUMMARY:System Development 1 TP - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313930302d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221213T091500Z\n" +
          "DTEND:20221213T104500Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nLOPEZ   CYRIL\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383530342d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221213T110000Z\n" +
          "DTEND:20221213T123000Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nLOPEZ   CYRIL\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383530342d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230103T091500Z\n" +
          "DTEND:20230103T104500Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nLOPEZ   CYRIL\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383530342d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230103T110000Z\n" +
          "DTEND:20230103T123000Z\n" +
          "SUMMARY:Network - Niveau 1*\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nLOPEZ   CYRIL\\n(Exporté le:26/12/202\n" +
          " 2 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d34383530342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221121T094500Z\n" +
          "DTEND:20221121T111500Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2210778#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d31322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221121T073000Z\n" +
          "DTEND:20221121T090000Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2210779#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d31302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221025T123000Z\n" +
          "DTEND:20221025T140000Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142870#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221115T084500Z\n" +
          "DTEND:20221115T101500Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2210793#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d392d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221116T084500Z\n" +
          "DTEND:20221116T101500Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2210780#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221115T070000Z\n" +
          "DTEND:20221115T083000Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2210792#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221116T070000Z\n" +
          "DTEND:20221116T083000Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#08/12/2022##TRANSFERE#2210791#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d31332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221019T063000Z\n" +
          "DTEND:20221019T080000Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142864#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221019T081500Z\n" +
          "DTEND:20221019T094500Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142865#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221019T103000Z\n" +
          "DTEND:20221019T120000Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142866#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221025T063000Z\n" +
          "DTEND:20221025T080000Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142867#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221025T104500Z\n" +
          "DTEND:20221025T121500Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142869#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221025T081500Z\n" +
          "DTEND:20221025T094500Z\n" +
          "SUMMARY:Introduction WOA CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142868#20/11/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nCASTELLTORT   ARNAUD\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313931392d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221021T060000Z\n" +
          "DTEND:20221021T100000Z\n" +
          "SUMMARY:Piscine\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142881#20/11/2022#\\nDO3-TOU\n" +
          " S\\nCASTELLTORT   ARNAUD\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221021T113000Z\n" +
          "DTEND:20221021T153000Z\n" +
          "SUMMARY:Piscine\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2134502#20/11/2022#\\nDO3-TOU\n" +
          " S\\nFACERIAS   MICHEL\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933332d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230104T084500Z\n" +
          "DTEND:20230104T101500Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230210T103000Z\n" +
          "DTEND:20230210T120000Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221216T130000Z\n" +
          "DTEND:20221216T143000Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221216T144500Z\n" +
          "DTEND:20221216T161500Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230104T103000Z\n" +
          "DTEND:20230104T120000Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230110T130000Z\n" +
          "DTEND:20230110T143000Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230410T060000Z\n" +
          "DTEND:20230410T180000Z\n" +
          "SUMMARY:Pâques\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nEGC3-PUB\\nEGC4-PUB\\nSE3-PUB\\nMSI3-PUB\\nMSI4-PUB\\nDO4-PUB\\\n" +
          " nMEA3-PUB\\nGBA3-PUB\\nIG3-PUB\\nMAT3-PUB\\nMI3-PUB\\nSTE3-PUB\\nGBA4-PUB\\nIG4\n" +
          " -PUB\\nMAT4-PUB\\nMI4-PUB\\nSTE4-PUB\\nMEA4-PUB\\nSE4-PUB\\nDO3-PUB\\nA valider\n" +
          " \\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d38333835352d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230110T144500Z\n" +
          "DTEND:20230110T161500Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d37\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230113T130000Z\n" +
          "DTEND:20230113T143000Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d38\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230113T144500Z\n" +
          "DTEND:20230113T161500Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d39\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230208T103000Z\n" +
          "DTEND:20230208T120000Z\n" +
          "SUMMARY:Initiation à Python\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nHAMMAMI   HOUDA\\nA valider\\n(Exporté le:26/12/2\n" +
          " 022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221026T143000Z\n" +
          "DTEND:20221026T160000Z\n" +
          "SUMMARY:Introduction au Control Version Systems\n" +
          "LOCATION:Classe Virtuelle (CV) EPUM\n" +
          "DESCRIPTION:\\n#VERIFIE#12/11/2022##TRANSFERE#2142842#20/11/2022#\\nDO3-TOU\n" +
          " S\\nCASTELLTORT   ARNAUD\\nTransféré\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933362d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230206T070000Z\n" +
          "DTEND:20230206T083000Z\n" +
          "SUMMARY:Harmonisation I\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nCASTELLTORT   ARNAUD\\n(Exporté le:26\n" +
          " /12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933372d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230206T084500Z\n" +
          "DTEND:20230206T101500Z\n" +
          "SUMMARY:Harmonisation I\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nCASTELLTORT   ARNAUD\\n(Exporté le:26\n" +
          " /12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933372d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230206T103000Z\n" +
          "DTEND:20230206T120000Z\n" +
          "SUMMARY:Harmonisation I\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nCASTELLTORT   ARNAUD\\n(Exporté le:26\n" +
          " /12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d313933372d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230316T080000Z\n" +
          "DTEND:20230316T110000Z\n" +
          "SUMMARY:Fomation aux compétences transversales\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nIG3-TOUS\\nMEA3-TOUS\\nGBA3-TOUS\\nMAT3-TOUS\\nMI3-TOUS\\nSTE3\n" +
          " -TOUS\\nMSI3-TOUS\\nDO3-TOUS\\nEGC3-TOUS\\nSE3-TOUS\\nA valider\\n(Exporté le:\n" +
          " 26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313032372d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221027T100000Z\n" +
          "DTEND:20221027T110000Z\n" +
          "SUMMARY:Presentation entreprise - Lizard Global\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nDO5-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:\n" +
          " 56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39303531392d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221121T144500Z\n" +
          "DTEND:20221121T153000Z\n" +
          "SUMMARY:Semaine Internationale / Table Ronde Mobilités éco-responsables /\n" +
          "  Polytech Green\n" +
          "LOCATION:Amphi Peytavin\n" +
          "DESCRIPTION:\\n\\nSTE4-PUB\\nDO4-PUB\\nEGC4-PUB\\nMEA4-PUB\\nSE4-PUB\\nGBA4-PUB\\\n" +
          " nIG4-PUB\\nMAT4-PUB\\nMI4-PUB\\nMSI4-PUB\\nDO5-PUB\\nEGC5-PUB\\nMEA5-PUB\\nSE5-\n" +
          " PUB\\nGBA5-PUB\\nIG5-PUB\\nMAT5-PUB\\nMI5-PUB\\nMSI5-PUB\\nPROD5-PUB\\nSTE5-PUB\n" +
          " \\nDO3-PUB\\nEGC3-PUB\\nMEA3-PUB\\nSE3-PUB\\nGBA3-PUB\\nIG3-PUB\\nMAT3-PUB\\nMI3\n" +
          " -PUB\\nMSI3-PUB\\nSTE3-PUB\\nA valider\\nVisibilité\\n(Exporté le:26/12/2022 \n" +
          " 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39353638392d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230706T120000Z\n" +
          "DTEND:20230706T133000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230706T134500Z\n" +
          "DTEND:20230706T151500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221027T120000Z\n" +
          "DTEND:20221027T133000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221027T134500Z\n" +
          "DTEND:20221027T151500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221216T070000Z\n" +
          "DTEND:20221216T083000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221118T070000Z\n" +
          "DTEND:20221118T083000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221118T084500Z\n" +
          "DTEND:20221118T101500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221212T070000Z\n" +
          "DTEND:20221212T083000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230302T130000Z\n" +
          "DTEND:20230302T140000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230209T144500Z\n" +
          "DTEND:20230209T161500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31372d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230209T130000Z\n" +
          "DTEND:20230209T143000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31362d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230202T144500Z\n" +
          "DTEND:20230202T161500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31352d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230202T130000Z\n" +
          "DTEND:20230202T143000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d382d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230112T144500Z\n" +
          "DTEND:20230112T161500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31332d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230109T080000Z\n" +
          "DTEND:20230109T093000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31312d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230105T144500Z\n" +
          "DTEND:20230105T161500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31342d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221216T084500Z\n" +
          "DTEND:20221216T101500Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230105T130000Z\n" +
          "DTEND:20230105T143000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d31322d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230112T130000Z\n" +
          "DTEND:20230112T143000Z\n" +
          "SUMMARY:Anglais S5\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nO SULLIVAN   NIALL\\n(Exporté le:26/1\n" +
          " 2/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d333533302d392d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221121T154500Z\n" +
          "DTEND:20221121T163000Z\n" +
          "SUMMARY:Semaine Internationale / Stages & Etudes en Amérique du Nord\n" +
          "LOCATION:Amphi Peytavin\n" +
          "DESCRIPTION:\\n\\nSTE4-PUB\\nDO4-PUB\\nEGC4-PUB\\nMEA4-PUB\\nSE4-PUB\\nGBA4-PUB\\\n" +
          " nIG4-PUB\\nMAT4-PUB\\nMI4-PUB\\nMSI4-PUB\\nDO5-PUB\\nEGC5-PUB\\nMEA5-PUB\\nSE5-\n" +
          " PUB\\nGBA5-PUB\\nIG5-PUB\\nMAT5-PUB\\nMI5-PUB\\nMSI5-PUB\\nPROD5-PUB\\nSTE5-PUB\n" +
          " \\nDO3-PUB\\nEGC3-PUB\\nMEA3-PUB\\nSE3-PUB\\nGBA3-PUB\\nIG3-PUB\\nMAT3-PUB\\nMI3\n" +
          " -PUB\\nMSI3-PUB\\nSTE3-PUB\\nVisibilité\\nA valider\\n(Exporté le:26/12/2022 \n" +
          " 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39353639322d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221129T173000Z\n" +
          "DTEND:20221129T183000Z\n" +
          "SUMMARY:Semaine Internationale / Stages & jobs au Canada anglophone\n" +
          "LOCATION:Amphi Peytavin\n" +
          "DESCRIPTION:\\n\\nSTE4-PUB\\nDO4-PUB\\nEGC4-PUB\\nMEA4-PUB\\nSE4-PUB\\nGBA4-PUB\\\n" +
          " nIG4-PUB\\nMAT4-PUB\\nMI4-PUB\\nMSI4-PUB\\nDO5-PUB\\nEGC5-PUB\\nMEA5-PUB\\nSE5-\n" +
          " PUB\\nGBA5-PUB\\nIG5-PUB\\nMAT5-PUB\\nMI5-PUB\\nMSI5-PUB\\nPROD5-PUB\\nSTE5-PUB\n" +
          " \\nDO3-PUB\\nEGC3-PUB\\nMEA3-PUB\\nSE3-PUB\\nGBA3-PUB\\nIG3-PUB\\nMAT3-PUB\\nMI3\n" +
          " -PUB\\nMSI3-PUB\\nSTE3-PUB\\nA valider\\nVisibilité\\n(Exporté le:26/12/2022 \n" +
          " 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39353639352d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221121T164500Z\n" +
          "DTEND:20221121T173000Z\n" +
          "SUMMARY:Semaine Internationale / Culture d’entreprise et Stages BMW et Al\n" +
          " lemagne\n" +
          "LOCATION:Amphi Peytavin\n" +
          "DESCRIPTION:\\n\\nSTE4-PUB\\nDO4-PUB\\nEGC4-PUB\\nMEA4-PUB\\nSE4-PUB\\nGBA4-PUB\\\n" +
          " nIG4-PUB\\nMAT4-PUB\\nMI4-PUB\\nMSI4-PUB\\nDO5-PUB\\nEGC5-PUB\\nMEA5-PUB\\nSE5-\n" +
          " PUB\\nGBA5-PUB\\nIG5-PUB\\nMAT5-PUB\\nMI5-PUB\\nMSI5-PUB\\nPROD5-PUB\\nSTE5-PUB\n" +
          " \\nDO3-PUB\\nEGC3-PUB\\nMEA3-PUB\\nSE3-PUB\\nGBA3-PUB\\nIG3-PUB\\nMAT3-PUB\\nMI3\n" +
          " -PUB\\nMSI3-PUB\\nSTE3-PUB\\nA valider\\nVisibilité\\n(Exporté le:26/12/2022 \n" +
          " 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39353639342d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221122T130000Z\n" +
          "DTEND:20221122T140000Z\n" +
          "SUMMARY:Semaine Internationale / Présentation des partenaires (obligatoir\n" +
          " e 3A&4A)\n" +
          "LOCATION:Amphi Peytavin\n" +
          "DESCRIPTION:\\n\\nSTE4-PUB\\nDO4-PUB\\nEGC4-PUB\\nMEA4-PUB\\nSE4-PUB\\nGBA4-PUB\\\n" +
          " nIG4-PUB\\nMAT4-PUB\\nMI4-PUB\\nMSI4-PUB\\nDO3-PUB\\nEGC3-PUB\\nMEA3-PUB\\nSE3-\n" +
          " PUB\\nGBA3-PUB\\nIG3-PUB\\nMAT3-PUB\\nMI3-PUB\\nMSI3-PUB\\nSTE3-PUB\\nVisibilit\n" +
          " é\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39353639362d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221118T160000Z\n" +
          "DTEND:20221118T173000Z\n" +
          "SUMMARY:System Development 1 CMTD - ASync\n" +
          "LOCATION:Distanciel asynchrone - AgilHybrid EPUM\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313632312d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221118T123000Z\n" +
          "DTEND:20221118T140000Z\n" +
          "SUMMARY:System Development 1 CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#30/11/2022##TRANSFERE#2197012#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313632332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221118T141500Z\n" +
          "DTEND:20221118T154500Z\n" +
          "SUMMARY:System Development 1 CMTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n#VERIFIE#30/11/2022##TRANSFERE#2197013#19/12/2022#\\nDO3-TOU\n" +
          " S\\nTransféré\\nFACERIAS   MICHEL\\n(Exporté le:26/12/2022 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d39313632332d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20221124T154500Z\n" +
          "DTEND:20221124T180000Z\n" +
          "SUMMARY:BlocagePromo\n" +
          "LOCATION:\n" +
          "DESCRIPTION:\\n\\nSE3-TOUS\\nMEA3-TOUS\\nGBA3-TOUS\\nSTE3-TOUS\\nMSI3-TOUS\\nMAT\n" +
          " 3-TOUS\\nEGC3-TOUS\\nDO3-TOUS\\nMI3-TOUS\\nA valider\\n(Exporté le:26/12/2022\n" +
          "  13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d32343535332d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230505T070000Z\n" +
          "DTEND:20230505T083000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d38\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230522T070000Z\n" +
          "DTEND:20230522T083000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d3134\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230515T084500Z\n" +
          "DTEND:20230515T101500Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d3133\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230327T084500Z\n" +
          "DTEND:20230327T101500Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d36\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230407T084500Z\n" +
          "DTEND:20230407T101500Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d37\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230310T133000Z\n" +
          "DTEND:20230310T150000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d3135\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230327T070000Z\n" +
          "DTEND:20230327T083000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d34\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230310T084500Z\n" +
          "DTEND:20230310T101500Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d32\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230310T103000Z\n" +
          "DTEND:20230310T120000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d33\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230515T070000Z\n" +
          "DTEND:20230515T083000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d3130\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230505T084500Z\n" +
          "DTEND:20230505T101500Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d3132\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230424T084500Z\n" +
          "DTEND:20230424T101500Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d3131\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230424T070000Z\n" +
          "DTEND:20230424T083000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d39\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230227T074500Z\n" +
          "DTEND:20230227T091500Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d30\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230407T070000Z\n" +
          "DTEND:20230407T083000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d35\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "BEGIN:VEVENT\n" +
          "DTSTAMP:20221226T125649Z\n" +
          "DTSTART:20230227T093000Z\n" +
          "DTEND:20230227T110000Z\n" +
          "SUMMARY:Développement Système II* CTD\n" +
          "LOCATION:DO Dev\n" +
          "DESCRIPTION:\\n\\nDO3-TOUS\\nA valider\\nORTIZ   SAMUEL\\n(Exporté le:26/12/20\n" +
          " 22 13:56)\\n\n" +
          "UID:ADE60414e4e4545454e434f555253323032322d323032332d353631382d302d31\n" +
          "CREATED:19700101T000000Z\n" +
          "LAST-MODIFIED:20221226T125649Z\n" +
          "SEQUENCE:-2058917087\n" +
          "END:VEVENT\n" +
          "END:VCALENDAR\n"
    }
  },
  mounted() {
    this.parseCalendar(this.EDT)
    //this.fetchCalendar()
  },
  methods: {
    fetchCalendar() {
      fetch(this.url_schedule, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
          .catch(err => {
            console.log(err)
            this.calendarExists = false
          })
          .then(resp => {
            if (resp.status !== 200) {
              this.calendarExists = false
              return Promise.reject(resp.status)
            }
            return resp
          })
          .then(resp => resp.data)
          .then((resp) => {
                console.log(resp)
                this.parseCalendar(resp)
              }
          )
    },

    parseCalendar(calendar) {
      const schedule = ical.parseICS(calendar)
      const today = new Date(Date.now())
      let nextCourse = []
      for (const k in schedule) {
        const event = schedule[k]
        if (event.type === 'VEVENT') {
          if (event.start >= today) {
            nextCourse.push(event)
          }
        }
      }
      nextCourse = nextCourse.sort((a, b) => {
        return a.start - b.start
      })
      nextCourse = nextCourse.slice(0, 5)

      for (const nextCourseElement of nextCourse) {
        let description = nextCourseElement.description.split("\n")
        for (const [index, value] of description.entries()) {
          if (value == "") delete description[index]
          else if (value == "A valider") delete description[index]
        }
        description = description.flat()
        description.pop()
        nextCourseElement.description = description
      }

      this.courses = nextCourse
    },
  }
}
</script>

<style scoped>

.box {
  width: 15vw;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 0;
  overflow: hidden;
  display: flex;
}
</style>