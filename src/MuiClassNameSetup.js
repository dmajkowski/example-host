import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material";

ClassNameGenerator.configure((componentName)=> `example-host--${componentName}`)