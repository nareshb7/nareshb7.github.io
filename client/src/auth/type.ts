import React from "react";

export type Mode = 'dark' | 'light';

export interface AuthContextModal {
    mode: Mode,
    setMode: React.Dispatch<React.SetStateAction<Mode>>
}
