import GearRatioForm from "@/components/calculation/gear_ratio/GearRatioForm";
import GearInchForm from "@/components/calculation/gear_inch/GearInchForm";
import GearRatioResults from "@/components/calculation/gear_ratio/GearRatioResults";
import GearInchResults from "@/components/calculation/gear_inch/GearInchResults";


export const BIKE_COLORS = ["#004777", "#885053", "#ff7700", "#337357", "#00afb5"];

export const CALCULATION_TYPES = [
    {
        id: 'gear_ratio',
        name: 'Gear ratios',
        form: GearRatioForm,
        results: GearRatioResults
    },
    {
        id: 'gear_inch',
        name: 'Gear inches',
        form: GearInchForm,
        results: GearInchResults
    },
];
