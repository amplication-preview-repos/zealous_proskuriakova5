/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  WeeklyMenu as PrismaWeeklyMenu,
  User as PrismaUser,
} from "@prisma/client";

export class WeeklyMenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WeeklyMenuCountArgs, "select">
  ): Promise<number> {
    return this.prisma.weeklyMenu.count(args);
  }

  async weeklyMenus(
    args: Prisma.WeeklyMenuFindManyArgs
  ): Promise<PrismaWeeklyMenu[]> {
    return this.prisma.weeklyMenu.findMany(args);
  }
  async weeklyMenu(
    args: Prisma.WeeklyMenuFindUniqueArgs
  ): Promise<PrismaWeeklyMenu | null> {
    return this.prisma.weeklyMenu.findUnique(args);
  }
  async createWeeklyMenu(
    args: Prisma.WeeklyMenuCreateArgs
  ): Promise<PrismaWeeklyMenu> {
    return this.prisma.weeklyMenu.create(args);
  }
  async updateWeeklyMenu(
    args: Prisma.WeeklyMenuUpdateArgs
  ): Promise<PrismaWeeklyMenu> {
    return this.prisma.weeklyMenu.update(args);
  }
  async deleteWeeklyMenu(
    args: Prisma.WeeklyMenuDeleteArgs
  ): Promise<PrismaWeeklyMenu> {
    return this.prisma.weeklyMenu.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.weeklyMenu
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}