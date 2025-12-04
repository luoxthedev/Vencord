/*
 * LuoxCord, a fork of Vencord (Discord client mod)
 * Copyright (c) 2024 Vendicated and contributors, forked by luoxthedev
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import gitHash from "~git-hash";
import gitRemote from "~git-remote";

export { gitHash, gitRemote };

export const VENCORD_USER_AGENT = `LuoxCord/${gitHash}${gitRemote ? ` (https://github.com/${gitRemote})` : ""}`;
