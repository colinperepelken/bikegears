import GearRatioForm from "@/components/calculation/gear_ratio/GearRatioForm";
import GearInchForm from "@/components/calculation/gear_inch/GearInchForm";
import GearRatioResults from "@/components/calculation/gear_ratio/GearRatioResults";
import GearInchResults from "@/components/calculation/gear_inch/GearInchResults";
import LearnGearRatio from "@/components/calculation/gear_ratio/LearnGearRatio";
import LearnGearInch from "@/components/calculation/gear_inch/LearnGearInch";


export const BIKE_COLORS = ["#004777", "#885053", "#ff7700", "#337357", "#00afb5"];

export const CALCULATION_TYPES = [
    {
        id: 'gear_ratio',
        name: 'Gear ratios',
        form: GearRatioForm,
        results: GearRatioResults,
        learn: LearnGearRatio
    },
    {
        id: 'gear_inch',
        name: 'Gear inches',
        form: GearInchForm,
        results: GearInchResults,
        learn: LearnGearInch
    },
];
