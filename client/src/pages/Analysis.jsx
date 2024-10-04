import React from "react";
import analysis from "../Img/analysis.png";

function Analysis() {
  return (
    <div className=" p-10 bg-wh text-dark">
      <h5 className="text-2xl font-bold">
        Analysis
      </h5>
      <p className="text-lg">
        Carbon emissions have reached unprecedented levels, with global
        emissions hitting a peak of 37.55 gigatons of CO2 in 2023, marking a
        significant increase from previous years. This rise can largely be
        attributed to heavy reliance on fossil fuels, industrial growth, and
        population increases in key nations.
      </p>
      <div className="flex justify-center aslign-center items-center">
      <img src={analysis} alt="extra analysis" className="my-10"/>
      </div>
      <h5 className="text-2xl font-bold">Top 5 Countries by Carbon Emissions (2021):</h5>
      <p className="text-lg">
        <ol className="list-decimal">
          <li>
            <b>China:</b> China's massive population and heavy reliance on coal-powered
            industries drive its enormous emissions. Major contributors include
            steel and cement production.
          </li>
          <li>
            <b>United States:</b> Despite efforts toward renewable energy, fossil fuels
            used in electricity, heating, and transportation contribute
            significantly to emissions.
          </li>
          <li>
            <b>India:</b> Coal-fired power plants and agriculture, especially methane
            from rice paddies and livestock, are the primary sources of
            emissions.
          </li>
          <li>
            <b>Russia:</b> Emissions stem from fossil fuel combustion in energy
            production and the country's substantial oil and gas export
            industries.
          </li>
          <li>
            <b>Japan:</b> Industrial activities and fossil fuel-based energy
            generation, including gasoline and LPG usage, are major
            contributors.
          </li>
        </ol>
      </p>
      <iframe
        src="https://ourworldindata.org/grapher/deforestation-co2-trade-by-product?country=~CHN&tab=chart"
        loading="lazy"
        style={{ width: "100%", height: "600px", border: "0px none" }}
        allow="web-share; clipboard-write"
        title="co2 trade"
        className="my-10"
      ></iframe>
      <p className="text-lg">
        This chart shows the annual CO₂ emissions from deforestation in China.
        The data is trade-adjusted, meaning it accounts for emissions linked to
        both domestic production and imported goods.
      </p>
      <h5 className="text-2xl font-bold">Breakdown of CO₂ emissions by product:</h5>
      <p className="text-lg">
        <ol className="list-decimal">
          <li>
            <b>Oilseed products:</b> Oilseed crops like soybeans are commonly
            associated with deforestation in tropical regions, and their demand
            drives significant land-use changes.
          </li>
          <li>
            <b>Vegetables, fruits, nuts :</b> Growing demand for these products, often
            requiring the clearing of forests for new agricultural land,
            contributes to emissions.
          </li>
          <li>
            <b>Beef :</b> Beef production is linked to deforestation due to the need
            for grazing land and feed crops (often soy). Although significant,
            beef-related emissions are lower than oilseed products.
          </li>
          <li>
            <b>Rice:</b> Rice farming contributes less to deforestation compared to
            other crops but still adds to CO₂ emissions.
          </li>
          <li>
            <b>Sugar:</b> Sugar cultivation also has a relatively small contribution to
            deforestation-related emissions in China.
          </li>
        </ol>
      </p>
      <iframe
        src="https://ourworldindata.org/grapher/co-emissions-by-sector?tab=chart"
        loading="lazy"
        style={{ width: "100%", height: "600px", border: "0px none" }}
        allow="web-share; clipboard-write"
        title="co2 by sector"
        className="my-10"
      ></iframe>
      <p className="text-lg">
        The chart depicts global CO₂ emissions by sector from 1990 to 2020, with
        different colored lines representing various sectors. Here’s a more
        detailed breakdown:
      </p>
      <p className="text-lg">
        <ol className="list-decimal">
          <li>
            <b>Electricity and Heat:</b> Emissions have risen due to growing global
            energy demand, especially in developing countries. However, the
            recent uptick in renewable energy sources like wind and solar has
            led to a slight decline in emissions.
          </li>
          <li>
            <b>Transport:</b> Increased vehicle usage and global trade have driven
            emissions higher. A significant drop in 2020 aligns with the
            COVID-19 pandemic, which drastically reduced travel and
            transportation activities.
          </li>
          <li>
            <b>Manufacturing and Construction:</b> Emissions have increased due to
            industrialization in countries like China and India. The line shows
            steady growth, reflecting ongoing global industrial activities.
          </li>
          <li>
            <b>Buildings:</b> Emissions from buildings are generally lower, partly due
            to their localized nature and improvements in efficiency (e.g.,
            better insulation and energy-saving technologies).
          </li>
          <li>
            <b>Land-Use Change and Forestry:</b> This sector exhibits sharp
            fluctuations due to activities like deforestation and reforestation.
            Reforestation efforts can lead to carbon sequestration, while
            deforestation causes spikes in emissions.
          </li>
          <li>
            <b>Aviation, Shipping, Other Fuel Combustion, Fugitive Emissions:</b>
            Emissions from aviation and shipping rose steadily before the
            pandemic but remain lower in comparison to electricity and transport
            emissions.
          </li>
        </ol>
      </p>
    </div>
  );
}

export default Analysis;
