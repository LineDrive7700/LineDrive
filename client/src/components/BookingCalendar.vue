<template>
	<Panel>
        <slot>
            <v-toolbar flat dense class="gray darken-3">
                <v-toolbar-title>Book the Coach</v-toolbar-title>
            </v-toolbar>

			<h4> Hello Mr. {{this.$store.state.user.name}} </h4>
			<h5> Please select the date, slots and coach </h5>
			<v-select v-model="selectLocation" :items="items" item-text="Location" item-value="id" label="Select the location" return-item-value single-line></v-select>
			<div hidden><v-text-field v-model="selectLocation" name="location" label="Location" disabled hidden></v-text-field>
			</div>
			<v-layout v-if="selectLocation">
				<v-flex xs5>
						<v-date-picker ref="selectDate" v-model="selectDate" full-width></v-date-picker>
				</v-flex>
				<v-flex xs8>
					<v-btn class="blue darken-3" dark  @click="viewSelected">View Booked Availability</v-btn>
					<div v-if="hiddenAdd">
						<v-data-table :headers="headers" :items="slots" :search="search" v-model="selected" item-key="id" select-all class="elevation-1">
							<template slot="items" slot-scope="props">
								<v-tooltip bottom>
									<span slot="activator">
									{{ props.header.text }}
									</span>
									<span>
									{{ props.header.text }}
									</span>
								</v-tooltip>
							</template>
							<template slot="items" v-if="!props.item.booked_status" slot-scope="props">
								<td>
									<v-checkbox	v-if="!props.item.booked_status" :disabled="props.item.booked_status" v-model="props.selected" primary></v-checkbox>
								</td>
								<td class="text-xs-left">{{ props.item.selectDate }}</td>
								<td class="text-xs-left">{{ items[props.item.locationId-1].Location }}</td>
								<td class="text-xs-left">{{ props.item.email }}</td>
								<td class="text-xs-left">{{ availableSlots[props.item.slotsId].Slots }}</td>
							</template>
						</v-data-table>
						<v-btn class="blue darken-3" dark  @click="SelectCage">Add the Slots</v-btn>
					</div>		
				</v-flex>
			</v-layout>
			<div class="error" v-html="error"></div>
            <div class="success" v-html="success"></div>
        </slot>
	</Panel>
</template>
<script>
import Panel from '@/components/Panel'
import SelectedDates from './../services/SelectedDates'
import LocationService from './../services/LocationService'
import CalendarView from "vue-simple-calendar"
import CalendarMathMixin from "vue-simple-calendar/dist/calendar-math-mixin.js"
import Slotsservice from './../services/SlotsService'

require("vue-simple-calendar/dist/static/css/default.css")
require("vue-simple-calendar/dist/static/css/holidays-us.css")
// For live testing while making changes to the component, assumes repo pulled to sister folder
/*
import CalendarView from "../../vue-simple-calendar/src/CalendarView.vue"
import CalendarMathMixin from "../../vue-simple-calendar/src/CalendarMathMixin.js"
require("../../vue-simple-calendar/static/css/default.css")
require("../../vue-simple-calendar/static/css/holidays-us.css")
*/

export default {

	components: {
		CalendarView,
		Panel
	},
	mixins: [CalendarMathMixin],
	data() {
		return {
			hiddenAdd: null,
			search: '',
        	selected: [],
			headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: false,
            value: 'selectDate'
		  },
		  { text: 'Location', value: 'locationId' },
          { text: 'Coach', value: 'email' },
          { text: 'Slots', value: 'slotsId' }
        ],
			/* Show the current month, and give it some fake events to show */
			selectAvailability: [],
			selectDate: null,
			slots: null,
			error: null,
			success: null,
			selectLocation: "",
			email:"",
			location:"",
			items: [],
			availableSlots: [],	
		}
	},
	computed: {
		
	},
	
	async mounted() {
		this.items = (await LocationService.index()).data
		this.availableSlots = (await Slotsservice.index()).data
        alert(this.items)
    },

	methods: {
		async viewSelected(){
          try{
			  console.log("hi "+ this.selectAvailability+" "+this.selectDate+ " "+this.selectLocation+ " "+this.$store.state.user.email)
              this.error=null;
              this.success=null;    
              //alert(this.title+ " Hi")       
            this.slots = (await SelectedDates.index({
				//email: this.$store.state.user.email,
				selectDate: this.selectDate,
				locationId: this.selectLocation,
			}	
			)).data
			this.success = "Please find the slots"
			this.hiddenAdd = "true"
          }catch(error){
              this.error = error.response.data.error;
          }
	  },
	  async bookSelected(){
          try{
			  console.log("hi "+ this.selectAvailability+" "+this.selectDate+ " "+this.selectLocation+ " "+this.$store.state.user.email)
              this.error=null;
              this.success=null;    
              //alert(this.title+ " Hi")       
            const response = await SelectedDates.post({
				email: this.$store.state.user.email,
				selectDate: this.selectDate,
				location: this.selectLocation,
				selectAvailability: this.selectAvailability
			})
			this.success = "Booked the slots"
			
          }catch(error){
              this.error = error.response.data.error;
          }
	  },
	  async SelectCage(){
          try{
			  console.log("hi "+ this.selected+" "+this.selectDate+ " "+this.selectLocation+ " "+this.$store.state.user.email)
              this.error=null;
              this.success=null;    
              //alert(this.title+ " Hi")       
            const response = await SelectedDates.post({
				email: this.$store.state.user.email,
				selectDate: this.selectDate,
				location: this.selectLocation,
				selectAvailability: this.selectAvailability
			})
			this.success = "Booked the slots"
			
          }catch(error){
              this.error = error.response.data.error;
          }
      }
	},
}
</script>

<style>
html,
body {
	height: 100%;
	margin: 0;
	background-color: #f7fcff;
}

#app {
	display: flex;
	flex-direction: row;
	font-family: Calibri, sans-serif;
	width: 95vw;
	min-width: 30rem;
	max-width: 100rem;
	min-height: 40rem;
	margin-left: auto;
	margin-right: auto;
}

.calendar-controls {
	margin-right: 1rem;
	min-width: 14rem;
	max-width: 14rem;
}

.calendar-parent {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: hidden;
	max-height: 80vh;
	background-color: white;
}

/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
	min-height: 6rem;
}

/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */

/* Add some styling for events tagged with the "birthday" class */
.calendar .event.birthday {
	background-color: #e0f0e0;
	border-color: #d7e7d7;
}

.calendar .event.birthday::before {
	content: "\1F382";
	margin-right: 0.5em;
}
</style>
