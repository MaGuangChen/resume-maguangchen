import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import * as actions from '../../../actions/actions';
const Range = createSliderWithTooltip(Slider.Range);

class PriceSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerValue: props.lowerValue,
      upperValue: props.upperValue,
    };
  }
  
  slideUnit = (value) => {
    const valueString = `${value}`;
    const valueThousands = parseInt(`${valueString[0]}${valueString[1]}000`,10);
    let valueInt = parseInt(`${valueString[2]}${valueString[3]}${valueString[4]}`,10);
    if(valueInt < 500) {
      valueInt = 0;
    } else if(valueInt > 500) {
      valueInt = 1000;
    }
    return valueThousands + valueInt;
  }

  parseStr2Money = (v)=> {
    const value = this.slideUnit(v);
    let num = value.toString();
    const pattern = /(-?\d+)(\d{3})/;
    while(pattern.test(num)){
      num = num.replace(pattern, "$1,$2");
    }
    return `$${num}`
  }

  onSliderChange = (value) => {
    this.setState({ value });
    const lowerValue = this.slideUnit(value[0]);
    const upperValue = this.slideUnit(value[1]);
    this.setState({
      lowerValue,
      upperValue
    });
    const salary = [lowerValue, upperValue];
    this.props.dispatch(actions.handleSalaryBudget(salary));
  }

  render() {
    const { minValue, maxValue, lowerValue, upperValue, page } = this.props;

    let style = {}
    if(page === 'user') {
      style = {
        background: 'none',
        display: 'inline',
        marginBottom: '1.5rem'
      }
    }

    return (
      <div  style={style} className="contact_input_timeNsalary_salary">
        <div className="contact_input_timeNsalary_salary_title">
        <i className="fa fa-usd fa-2x" aria-hidden="true"></i>
        <p>NT</p>
        </div>
        <div>
          <p>{this.parseStr2Money(this.state.lowerValue)}</p>
          <p className="contact_input_timeNsalary_salary_slash">~</p>
          <p>{this.parseStr2Money(this.state.upperValue)}</p>
        </div>
        <div>
          <div className="contact_input_timeNsalary_salary_range">
            <Range
              allowCross={false}
              min={minValue}
              max={maxValue}
              defaultValue={[lowerValue, upperValue]}
              tipFormatter={value => this.parseStr2Money(value)}
              onChange={this.onSliderChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(PriceSlider);
