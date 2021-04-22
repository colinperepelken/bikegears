import LearnGearRatio from "@/components/calculation/gear_ratio/learn/LearnGearRatio";
import LearnGearInch from "@/components/calculation/gear_inch/learn/LearnGearInch";
import GearRatioChart from "@/components/calculation/gear_ratio/calculator/GearRatioChart";
import GearRatioInsights from "@/components/calculation/gear_ratio/calculator/GearRatioInsights";
import GearRatioTable from "@/components/calculation/gear_ratio/calculator/GearRatioTable";
import GearInchChart from "@/components/calculation/gear_inch/calculator/GearInchChart";
import GearInchInsights from "@/components/calculation/gear_inch/calculator/GearInchInsights";
import GearInchTable from "@/components/calculation/gear_inch/calculator/GearInchTable";


export const BIKE_COLORS = ["#004777", "#885053", "#ff7700", "#337357", "#00afb5"];

export const BIKE_FIELDS = {
    FIELD_CHAINRINGS: 'chainrings',
    FIELD_CASSETTE: 'cassette',
    FIELD_RIM: 'rim',
    FIELD_WHEEL: 'wheel',
    FIELD_UNITS: 'units',
}

export const CALCULATION_TYPES = [
    {
        id: 'gear_ratio',
        name: 'Gear ratios',
        fields: [BIKE_FIELDS.FIELD_CHAINRINGS, BIKE_FIELDS.FIELD_CASSETTE],
        results: [GearRatioChart, GearRatioInsights, GearRatioTable],
        learn: LearnGearRatio,
        enabled: true
    },
    {
        id: 'gear_inch',
        name: 'Gear inches',
        fields: [BIKE_FIELDS.FIELD_CHAINRINGS, BIKE_FIELDS.FIELD_CASSETTE, BIKE_FIELDS.FIELD_RIM, BIKE_FIELDS.FIELD_WHEEL],
        results: [GearInchChart, GearInchInsights, GearInchTable],
        learn: LearnGearInch,
        enabled: true
    },
    {
        id: 'gear_meters',
        name: 'Meters of development',
        fields: [BIKE_FIELDS.FIELD_CHAINRINGS, BIKE_FIELDS.FIELD_CASSETTE, BIKE_FIELDS.FIELD_RIM, BIKE_FIELDS.FIELD_WHEEL],
        results: null,
        learn: null,
        enabled: false
    },
    {
        id: 'speed',
        name: 'Speed',
        fields: [BIKE_FIELDS.FIELD_CHAINRINGS, BIKE_FIELDS.FIELD_CASSETTE, BIKE_FIELDS.FIELD_RIM, BIKE_FIELDS.FIELD_WHEEL, BIKE_FIELDS.FIELD_UNITS],
        results: null,
        learn: null,
        enabled: false
    }
];

export const DEFAULT_BIKE_SETTINGS = {
    chainrings: [34, 50],
    cassetteMin: 11,
    cassetteMax: 28,
    name: 'Bike',
    rimSize: 622,
    tireSize: 23
};

// BSD is bead seat diameter in mm
export const RIM_SIZES = [
    {name: '27""', bsd: 630},
    {name: '700c / 29"', bsd: 622},
    {name: '650b / 27.5"', bsd: 571},
    {name: '650c', bsd: 584},
    {name: '26"', bsd: 559},
];

export const DONATE_URL = 'https://ko-fi.com/colinperepelken';
