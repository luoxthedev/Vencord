/*
 * LuoxCord, a fork of Vencord (Discord client mod)
 * Copyright (c) 2025 Vendicated and contributors, forked by luoxthedev
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export function createAndAppendStyle(id: string, target = document.documentElement) {
    const style = document.createElement("style");
    style.id = id;
    target.append(style);
    return style;
}
