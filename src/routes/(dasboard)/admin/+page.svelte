<!-- 
<script lang="ts">
	import FullCalendar, { Draggable } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';
	import timegridPlugin from '@fullcalendar/timegrid';
	import interactionPlugin from '@fullcalendar/interaction';
    import { Button, Input } from 'flowbite-svelte';

	let options = {
		dateClick: handleDateClick,
		droppable: true,
		editable: true,
		events: [
			// initial event data
			{ title: 'New Event', start: new Date() },
		],
		initialView: 'dayGridMonth',
		plugins: [daygridPlugin, timegridPlugin, interactionPlugin],
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay',
		},
		height: '100%',
		weekends: true,
	};
	let hour = 4;
	let calendarComponentRef : any;
	let eventData = { title: 'my event', duration: '02:00' };
	function setDrag(h: number){
		eventData.duration = convertNumberToHour(h)
		console.log(eventData.duration)
	}
	function convertNumberToHour(number: number) {
  		const hour = Math.floor(number);
  		const minute = Math.floor((number - hour) * 60);
  		return `${hour}:${minute == 0 ? minute + '0' : minute}`;
	}
	function toggleWeekends() {
		options = { ...options, weekends: !options.weekends };
	}

	function gotoPast() {
		let calendarApi = calendarComponentRef.getAPI();
		calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
	}

	function handleDateClick(event: any) {
		if (
			confirm('Would you like to add an event to ' + event.dateStr + ' ?')
		) {
			const { events } = options;
			const calendarEvents = [
				...events,
				{
					title: 'New Event',
					start: event.date,
					allDay: event.allDay,
				},
			];
			options = {
				...options,
				events: calendarEvents,
			};
		}
	}
</script> -->
<script lang="ts">
	import axiosClient from "$lib/ClientService";
	import { BASE_API } from "$lib/Const";
	import { formatCurrency } from "$lib/Utils/accounting";
	import { toastErr } from "$lib/store/toastError";
	let data: any;
	import {
		Chart,
		Card,
		A,
		Button,
		Dropdown,
		DropdownItem,
	} from "flowbite-svelte";

	const optionsOrder = {
		colors: ["#1A56DB", "#FDBA8C"],
		series: [
			{
				name: "Organic",
				color: "#1A56DB",
				data: [
					{ x: "Mon", y: 231 },
					{ x: "Tue", y: 122 },
					{ x: "Wed", y: 63 },
					{ x: "Thu", y: 421 },
					{ x: "Fri", y: 122 },
					{ x: "Sat", y: 323 },
					{ x: "Sun", y: 111 },
				],
			},
			//   {
			//     name: 'Social media',
			//     color: '#FDBA8C',
			//     data: [
			//       { x: 'Mon', y: 232 },
			//       { x: 'Tue', y: 113 },
			//       { x: 'Wed', y: 341 },
			//       { x: 'Thu', y: 224 },
			//       { x: 'Fri', y: 522 },
			//       { x: 'Sat', y: 411 },
			//       { x: 'Sun', y: 243 }
			//     ]
			//   }
		],
		chart: {
			type: "bar",
			height: "320px",
			fontFamily: "Inter, sans-serif",
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "70%",
				borderRadiusApplication: "end",
				borderRadius: 8,
			},
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontFamily: "Inter, sans-serif",
			},
		},
		states: {
			hover: {
				filter: {
					type: "darken",
					value: 1,
				},
			},
		},
		stroke: {
			show: true,
			width: 0,
			colors: ["transparent"],
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -14,
			},
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		xaxis: {
			floating: false,
			labels: {
				show: true,
				style: {
					fontFamily: "Inter, sans-serif",
					cssClass:
						"text-xs font-normal fill-gray-500 dark:fill-gray-400",
				},
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
		},
		fill: {
			opacity: 1,
		},
	};
	const optionsBase = {
		series: ['', ''],
		colors: ["#1C64F2", "#16BDCA"],
		chart: {
			height: 420,
			width: "100%",
			type: "pie",
		},
		stroke: {
			colors: ["white"],
			lineCap: "",
		},
		plotOptions: {
			pie: {
				labels: {
					show: true,
				},
				size: "100%",
				dataLabels: {
					offset: -25,
				},
			},
		},
		labels: ["Total service", "Total active service"],
		dataLabels: {
			enabled: true,
			style: {
				fontFamily: "Inter, sans-serif",
			},
		},
		legend: {
			position: "bottom",
			fontFamily: "Inter, sans-serif",
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return value + "";
				},
			},
		},
		xaxis: {
			labels: {
				formatter: function (value) {
					return value + "%";
				},
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
	};
	const optionsBase2 = {
		series: [8, 8],
		colors: ["#1C64F2", "#16BDCA"],
		chart: {
			height: 420,
			width: "100%",
			type: "pie",
		},
		stroke: {
			colors: ["white"],
			lineCap: "",
		},
		plotOptions: {
			pie: {
				labels: {
					show: true,
				},
				size: "100%",
				dataLabels: {
					offset: -25,
				},
			},
		},
		labels: ["Total service", "Total active service"],
		dataLabels: {
			enabled: true,
			style: {
				fontFamily: "Inter, sans-serif",
			},
		},
		legend: {
			position: "bottom",
			fontFamily: "Inter, sans-serif",
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return value + "";
				},
			},
		},
		xaxis: {
			labels: {
				formatter: function (value) {
					return value + "%";
				},
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
	};
	const optionsBase3 = {
		series: ["0", "0"],
		colors: ["#1C64F2", "#16BDCA"],
		chart: {
			height: 420,
			width: "100%",
			type: "pie",
		},
		stroke: {
			colors: ["white"],
			lineCap: "",
		},
		plotOptions: {
			pie: {
				labels: {
					show: true,
				},
				size: "100%",
				dataLabels: {
					offset: -25,
				},
			},
		},
		labels: ["Total service", "Total active service"],
		dataLabels: {
			enabled: true,
			style: {
				fontFamily: "Inter, sans-serif",
			},
		},
		legend: {
			position: "bottom",
			fontFamily: "Inter, sans-serif",
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					return value + "";
				},
			},
		},
		xaxis: {
			labels: {
				formatter: function (value) {
					return value + "%";
				},
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
	};
	let optionsService = optionsBase;
	let optionsCheckInOut = optionsBase2;
	let optionsCheckInOutAmount = optionsBase3;
	let statistical: any;
	function getData() {
		try {
			axiosClient
				.get(BASE_API + "/dashboard")
				.then(async (response) => {
					data = response?.data?.data;
					statistical = data.statistical;
					const outputList = [];

					for (const key in data.orderCounts) {
						if (data.orderCounts.hasOwnProperty(key)) {
							outputList.push({
								x: key,
								y: data.orderCounts[key],
							});
						}
					}
					optionsOrder.series[0].data = outputList;
					optionsService.series[0] = statistical?.totalServices;
					optionsService.series[1] = statistical?.totalActiveServices;
					//
					optionsCheckInOut.series[0] = statistical?.totalCheckIns;
					optionsCheckInOut.series[1] = statistical?.totalCheckOuts;
					optionsCheckInOut.labels=['Total check in','Total check out']
					//
					optionsCheckInOutAmount.series[0] = statistical?.totalCheckInAmount;
					optionsCheckInOutAmount.series[1] =
						statistical?.totalCheckOutAmount;
						optionsCheckInOutAmount.labels = ['Total check in price','Total check out price']
					console.log(data);
				})
				.catch((error) => {
					toastErr.set([
						{
							message: "Order failed" + error.message,
							type: "error",
						},
					]);
				});
		} catch (error) {
			toastErr.set([
				{
					message: "Order failed: " + error.message,
					type: "error",
				},
			]);
		}
	}
	getData();
</script>

<svelte:head>
	<title>Admin Statistical</title>
</svelte:head>

<div class="w-full">
	<div class="w-full grid grid-cols-4 gap-4 mb-4">
		<Card class="w-full">
			<div class="flex justify-between items-start w-full">
				<div class="flex-col items-center">
					<div class="flex items-center mb-1">
						<h5
							class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1"
						>
							Total Service
						</h5>
					</div>
				</div>
			</div>
	
			<Chart options={optionsService} class="py-6" />
		</Card>
		<Card>
			<div class="flex justify-between items-start w-full">
				<div class="flex-col items-center">
					<div class="flex items-center mb-1">
						<h5
							class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1"
						>
							Total check in - check out
						</h5>
					</div>
				</div>
			</div>
	
			<Chart options={optionsCheckInOut} class="py-6" />
		</Card>
		<Card>
			<div class="flex justify-between items-start w-full">
				<div class="flex-col items-center">
					<div class="flex items-center mb-1">
						<h5
							class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1"
						>
							Total check in - check out price
						</h5>
					</div>
				</div>
			</div>
	
			<Chart options={optionsCheckInOutAmount} class="py-6" />
		</Card>
		<Card>
			<div class="flex justify-between items-start w-full">
				<div class="flex-col items-center">
					<div class="flex items-center mb-1">
						<h5
							class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1"
						>
							Total Customer
						</h5>
					</div>
				</div>
			</div>
			<div class="flex w-full h-full justify-center items-center"><p class="text-3xl">{statistical?.totalCustomers}</p></div>
			<div class="flex justify-between items-start w-full">
				<div class="flex-col items-center">
					<div class="flex items-center mb-1">
						<h5
							class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1"
						>
							Total Employer
						</h5>
					</div>
				</div>
			</div>
			<div class="flex w-full h-full justify-center items-center"><p class="text-3xl">{statistical?.totalEmployees}</p></div>
		</Card>
	</div>
	<Card class="w-full max-w-full">
		<div
			class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
		>
			<div class="flex items-center">
				<!-- <div
					class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3"
				>
				</div> -->
				<div>
					<h5
						class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"
					>
						Thống kê đơn hàng
					</h5>
					<!-- <p
						class="text-sm font-normal text-gray-500 dark:text-gray-400"
					>
						Leads generated per week
					</p> -->
				</div>
			</div>
			<div>
				<span
					class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
				>
					Tổng số lượng đơn hàng {statistical?.totalOrders}
				</span>
			</div>
		</div>
		<div class="grid grid-cols-2">
			<dl class="flex items-center">
				<dt
					class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1"
				>
					Tổng giá trị của các đơn hàng
				</dt>
				<dd class="text-gray-900 text-sm dark:text-white font-semibold">
					{formatCurrency(statistical?.totalOrderAmount)}
				</dd>
			</dl>
			<dl class="flex items-center justify-end">
				<dt
					class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1"
				>
					Tổng giá trị đơn hàng thành công
				</dt>
				<dd class="text-gray-900 text-sm dark:text-white font-semibold">
					{formatCurrency(statistical?.otalOrderSuccessAmount)}
				</dd>
			</dl>
		</div>
		<Chart options={optionsOrder} />
	</Card>
</div>

<!-- 
<div class="demo-app">
	<div class="demo-app-top">
		<Button on:click={toggleWeekends}>weekends</Button>
		<button on:click={gotoPast}>go to a date in the past</button> &nbsp; (also, click a date/time to add an event)
	</div>

	<div>
		<input type="text" bind:value={eventData.title}>
		<input type="number" bind:value={hour} on:change={() => setDrag(hour)}>
		<Draggable {eventData} class="draggable">
			Drag me in Week or Day view!
		</Draggable>
	</div>

	<div class="demo-app-calendar">
		<FullCalendar bind:this={calendarComponentRef} {options} />
	</div>
</div> -->

<!-- <style>
	:global(* > *) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.demo-app {
		width: 100vw;
		height: 100vh;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
		font-size: 14px;
	}

	.demo-app-calendar {
		width: 100%;
		flex-grow: 1;
		margin: 0 auto;
		max-width: 900px;
	}
	:global(.draggable) {
		color: white;
		background: #3788d8;
		width: fit-content;
		padding: 1rem;
		margin: 1rem;
		cursor: pointer;
	}
</style> -->
