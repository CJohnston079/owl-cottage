import "../../styles/shared/Tariff.css";

export default function Tariff() {
	return (
		<>
			<table>
				<caption>2025</caption>
				<thead>
					<tr>
						<th>Season</th>
						<th>
							Price per night <span className="th-subheading">up to 6 nights</span>
						</th>
						<th>
							Price per night <span className="th-subheading">7+ nights</span>
						</th>
						<th>Dates</th>
					</tr>
				</thead>
				<tr>
					<th>High Season</th>
					<td>£220</td>
					<td>£176</td>
					<td>1 Jul to 31 Aug</td>
				</tr>
				<tr>
					<th>Mid Season</th>
					<td>£185</td>
					<td>£148</td>
					<td>1 May to 30 Jun; 1 to 30 Sep</td>
				</tr>
				<tr>
					<th>Low Season</th>
					<td>£150</td>
					<td>£120</td>
					<td>22 to 30 Apr; 1 to 31 Oct</td>
				</tr>
				<tr>
					<th>Winter Season</th>
					<td>£110</td>
					<td>£88</td>
					<td>6 Jan to 4 Apr; 1 Nov to 19 Dec</td>
				</tr>
				<tr>
					<th>Easter</th>
					<td>£200</td>
					<td>£160</td>
					<td>5 to 21 Apr</td>
				</tr>
				<tr>
					<th>Christmas</th>
					<td>£200</td>
					<td>£160</td>
					<td>20 Dec to 4 Jan</td>
				</tr>
			</table>
		</>
	);
}
