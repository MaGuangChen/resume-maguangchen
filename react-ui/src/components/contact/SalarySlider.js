import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import 'rc-slider/assets/index.css';

const Range = createSliderWithTooltip(Slider.Range);
export default class PriceSlider extends Component {
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
    while(pattern.test(num))
    {
     num = num.replace(pattern, "$1,$2");
     
    }
    return `$${num} NT`
  }

  onSliderChange = (value) => {
    this.setState({ value });
    const lowerValue = this.slideUnit(value[0]);
    const upperValue = this.slideUnit(value[1]);
    this.setState({
      lowerValue,
      upperValue
    });
  }

  render() {
    const { minValue, maxValue, lowerValue, upperValue } = this.props;

    return (
      <div className="contact_input_timeNsalary_salary">
        <i className="fa fa-usd fa-2x" aria-hidden="true"></i>
        <div>
          <p>{this.parseStr2Money(this.state.lowerValue)}</p>
          <p>~</p>
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