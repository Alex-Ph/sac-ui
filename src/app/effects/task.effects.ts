import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { TaskService } from "../service/task.service";

@Injectable()
export class TaskEffects {
  loadOpenTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Open task page] Load open tasks"),
      mergeMap(() =>
        this.taskService.findOpenTasks().pipe(
          map((openTasks) => ({
            type: "[Open task page] open tasks loaded",
            openTasks,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
