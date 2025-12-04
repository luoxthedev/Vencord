/*
 * LuoxCord, a fork of Vencord (Discord client mod)
 * Copyright (c) 2025 Vendicated and contributors, forked by luoxthedev
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export function copyToClipboard(text: string): Promise<void> {
    return IS_DISCORD_DESKTOP ? DiscordNative.clipboard.copy(text) : navigator.clipboard.writeText(text);
}
