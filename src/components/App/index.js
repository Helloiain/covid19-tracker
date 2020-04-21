import React from 'react';

import Cards from '../Cards';
import Chart from '../Chart';
import CountryPicker from '../CountryPicker';

import styles from './app.module.css';
import { fetchData } from '../API';

export default class App extends React.Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	};

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}
